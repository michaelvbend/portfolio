import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  email = 'mvanderbend@gmail.com';
  linkedin = 'https://www.linkedin.com/in/michael-vd-bend/';
  github = 'https://github.com/michaelvbend';
}
