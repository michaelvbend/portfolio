import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  email = 'mvanderbend@gmail.com';
  linkedin = 'https://www.linkedin.com/in/michael-vd-bend/';
  github = 'https://github.com/michaelvbend';

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  // TODO: CHECKOUT https://www.youtube.com/watch?v=mOYAB1uMyhQ

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('test');
      console.log(this.contactForm.value);
    }
  }
}
