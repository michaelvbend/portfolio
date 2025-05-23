import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgStyle, NgTemplateOutlet } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../projects.interface';
import { skills } from '../../../shared/shared.constants';
import { ProjectService } from '../../../features/services/projects.service';
import { finalize, map, Observable } from 'rxjs';

@Component({
  selector: 'app-project-details',
  imports: [AsyncPipe, NgStyle],
  templateUrl: './project-details.component.html',
})
export class ProjectDetailsComponent implements OnInit {
  $project!: Observable<Project>;
  isLoading = false;
  skillListConstant = skills;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.setProject();
  }

  private setProject() {
    this.isLoading = true;
    this.$project = this.projectService
      .getProjects(this.route.snapshot.params['projectName'])
      .pipe(
        map((result) => result[0]),
        finalize(() => (this.isLoading = false))
      );
  }
}
