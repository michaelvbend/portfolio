import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'shared-top-bar',
  imports: [NgTemplateOutlet, NgClass],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {
  showMobileMenu = false;
  init = false;
  menuCategories = ['Home', 'Blog', 'About', 'Projects', 'Contact'];

  constructor(private router: Router) {}

  toggleMobileMenu(): void {
    this.init = true;
    this.showMobileMenu = !this.showMobileMenu;
  }

  navigateTo(category: string): void {
    this.router.navigate([`/${category.toLowerCase()}`]);
    if (this.showMobileMenu) {
      this.toggleMobileMenu();
    }
  }
}
