import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ValidationErrorPipe } from '../../core/utils/validation-error.pipe';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ValidationErrorPipe, NgTemplateOutlet],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  email = 'mvanderbend@gmail.com';
  linkedin = 'https://www.linkedin.com/in/michael-vd-bend/';
  github = 'https://github.com/michaelvbend';
  showAlert = false;

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    if (this.contactForm.valid) {
      // TODO: Send request to backend
      this.showAlert = true;
      this.contactForm.reset();
    }
  }

  dismissAlert(): void {
    this.showAlert = false;
  }
}
