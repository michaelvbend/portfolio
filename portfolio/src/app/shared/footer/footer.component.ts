import { Component } from '@angular/core';
import { EMAIL, GITHUB, LINKEDIN } from '../../pages/contact/contact.constants';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  year = new Date().getFullYear();
  contactDetails = { EMAIL, LINKEDIN, GITHUB };
}
