import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Blog } from '../../pages/blog/blog.interface';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private blogUrl = environment.apiUrl + '/api/blog';

  constructor(private httpClient: HttpClient) {}

  getBlogArticles(blogSlug?: string): Observable<Blog[]> {
    const url = blogSlug ? this.blogUrl + '/' + blogSlug : this.blogUrl;
    return this.httpClient
      .get<Blog[]>(url)
      .pipe(catchError(this.handleError<Blog[]>('getBlogArticles', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
