import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'shared-footer',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet, NgClass],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  year = new Date().getFullYear();
}
