import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EMAIL, GITHUB, LINKEDIN } from '../../pages/contact/contact.constants';

@Component({
  selector: 'shared-footer',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet, NgClass],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  year = new Date().getFullYear();
  contactDetails = { EMAIL, LINKEDIN, GITHUB };
}
