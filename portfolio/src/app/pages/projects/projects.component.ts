import { Component, OnInit, signal } from '@angular/core';
import { Project } from './projects.interface';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { ProjectService } from '../../features/services/projects.service';
import { finalize, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgTemplateOutlet, AsyncPipe, RouterLink],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  $projects: Observable<Project[]> = of([]);
  loading = false;
  skeletons = Array(3).fill(0);

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.$projects = this.projectService
      .getProjects()
      .pipe(finalize(() => (this.loading = false)));
  }
}
