import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  getPreferredColorScheme(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
