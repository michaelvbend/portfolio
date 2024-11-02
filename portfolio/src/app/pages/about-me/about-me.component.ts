import { Component } from '@angular/core';
import { currentEmployer, currentRole } from './about-me.constants';
import { NgStyle } from '@angular/common';
import { skills } from '../../shared/shared.constants';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {
  currentEmployer = currentEmployer;
  currentRole = currentRole;
  skillList = Object.entries(skills);
}
