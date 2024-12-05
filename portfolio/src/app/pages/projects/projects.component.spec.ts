import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { ProjectService } from '../../features/services/projects.service';
import { of, Subject } from 'rxjs';
import { Router } from '@angular/router';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let projectServiceMock: any;
  let routerMock: any;
  let projectsSubject: Subject<any>;

  beforeEach(async () => {
    projectsSubject = new Subject();

    projectServiceMock = {
      getProjects: jest.fn().mockReturnValue(projectsSubject.asObservable()),
    };

    routerMock = {};

    await TestBed.configureTestingModule({
      imports: [ProjectsComponent], // Add ProjectsComponent to imports
      providers: [
        { provide: ProjectService, useValue: projectServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set loading to true and call getProjects on ngOnInit', () => {
    component.ngOnInit();
    expect(component.loading).toBe(true);
    expect(projectServiceMock.getProjects).toHaveBeenCalled();
  });

  it('should set loading to false after getProjects completes', () => {
    component.ngOnInit();
    projectsSubject.next([]);
    projectsSubject.complete();
    expect(component.loading).toBe(false);
  });
});
