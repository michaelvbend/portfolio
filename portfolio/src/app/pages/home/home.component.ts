import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../core/utils/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  darkModeEnabled: boolean;
  constructor(private themeService: ThemeService) {
    this.darkModeEnabled = this.themeService.getPreferredColorScheme();
  }
}
