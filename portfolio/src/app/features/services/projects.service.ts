import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../../pages/projects/projects.interface';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private projectsUrl = environment.apiUrl + '/api/projects';

  constructor(private httpClient: HttpClient) {}

  getProjects(projectSlug?: string): Observable<Project[]> {
    const url = projectSlug
      ? this.projectsUrl + '/' + projectSlug
      : this.projectsUrl;
    return this.httpClient
      .get<Project[]>(url)
      .pipe(catchError(this.handleError<Project[]>('getProjects', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
