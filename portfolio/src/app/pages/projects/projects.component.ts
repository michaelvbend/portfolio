import { Component, OnInit, ResourceRef, signal } from '@angular/core';
import { Project } from './projects.interface';
import { NgTemplateOutlet } from '@angular/common';
import { ProjectService } from '../../features/services/projects.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [NgTemplateOutlet, RouterLink],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  projects!: ResourceRef<Project[]>;
  skeletons = Array(3).fill(0);

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.projects;
  }
}
