import { Component } from '@angular/core';
import { currentEmployer, currentRole, skills } from './about-me.constants';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {
  currentEmployer = currentEmployer;
  currentRole = currentRole;
  skillList = skills;
}
