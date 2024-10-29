import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { Router } from '@angular/router';
import { Project } from '../projects.interface';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [NgTemplateOutlet, AsyncPipe],
  templateUrl: './project-details.component.html',
})
export class ProjectDetailsComponent implements OnInit {
  project = {} as Project;

  constructor(private route: Router) {
    const navigation = this.route.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.project = navigation.extras.state['project'];
    }
  }

  ngOnInit(): void {}
}
