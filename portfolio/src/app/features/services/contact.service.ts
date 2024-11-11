import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../../pages/projects/projects.interface';
import { catchError, exhaustMap, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  Email,
  SendEmailResponse,
} from '../../pages/contact/contact.interface';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private sendEmailUrl = environment.apiUrl + '/api/email/send';

  constructor(private httpClient: HttpClient) {}

  sendEmail(email: Email): Observable<SendEmailResponse> {
    return this.httpClient
      .post<SendEmailResponse>(this.sendEmailUrl, email)
      .pipe(
        catchError(
          this.handleError<SendEmailResponse>(
            'sendEmail',
            {} as SendEmailResponse
          )
        )
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
