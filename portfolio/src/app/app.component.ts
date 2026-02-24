import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { inject } from '@vercel/analytics';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent, FooterComponent, MaintenanceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly maintenanceMode = environment.maintenanceMode;

  constructor() {
    inject();
  }
}
