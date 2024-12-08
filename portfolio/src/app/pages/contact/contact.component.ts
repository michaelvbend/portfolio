import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ValidationErrorPipe } from '../../core/utils/validation-error.pipe';
import { NgTemplateOutlet } from '@angular/common';
import { ContactService } from '../../features/services/contact.service';
import { Email } from './contact.interface';
import { exhaustMap, tap, Subject } from 'rxjs';
import { EMAIL, GITHUB, LINKEDIN } from './contact.constants';

@Component({
    selector: 'app-contact',
    imports: [ReactiveFormsModule, ValidationErrorPipe, NgTemplateOutlet],
    templateUrl: './contact.component.html'
})
export class ContactComponent {
  email = EMAIL;
  linkedin = LINKEDIN;
  github = GITHUB;

  showAlert = false;

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  private submit$ = new Subject<void>();

  constructor(private contactService: ContactService) {
    this.submit$
      .pipe(
        exhaustMap(() => {
          if (this.contactForm.valid) {
            return this.contactService
              .sendEmail(this.contactForm.value as Email)
              .pipe(
                tap(() => {
                  this.showAlert = true;
                  this.contactForm.reset();
                })
              );
          }
          return [];
        })
      )
      .subscribe({
        error: (err) => console.error('Error sending email:', err),
      });
  }

  onSubmit(): void {
    this.submit$.next();
  }

  dismissAlert(): void {
    this.showAlert = false;
  }
}
