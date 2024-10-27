import { Component } from '@angular/core';
import { Project } from './projects.interface';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Arnhem Guide App',
      description:
        'The Arnhem Guide App is a travel companion for exploring Arnhem, Netherlands. It provides users with curated guides to local landmarks, events, dining options, and nearby attractions.',
      imgUrl: 'arnhem-guide-app.jpg',
    },
    {
      name: 'Lumios',
      description:
        'This Spring Boot application serves as a backend for a book discovery platform, allowing users to fetch books and search for specific titles using image-based recognition with the Google Vision API.',
      imgUrl:
        'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip',
    },
    {
      name: 'Portfolio',
      description:
        'portfolio website showcases a range of projects and skills in software engineering and development. It highlights expertise in back-end development with Spring Boot, front-end experience with Angular and React (Native), and DevOps practices.',
      imgUrl: 'intro-image-dark.jpg',
    },
  ];
}
