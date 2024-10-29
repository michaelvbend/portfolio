import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailsComponent } from './pages/projects/project-details/project-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutMeComponent, title: 'About me' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects' },
  { path: 'projects/:projectName', component: ProjectDetailsComponent },
  { path: 'contact', component: ContactComponent, title: 'Contact me' },
];
