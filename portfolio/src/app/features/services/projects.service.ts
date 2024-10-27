import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../../pages/projects/projects.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private projectsUrl = environment.apiUrl + '/api/projects';

  constructor(private httpClient: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.projectsUrl);
  }
}
