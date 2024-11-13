import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  breakpoint() {
    return {
      xs: window.innerWidth <= 540,
      sm: window.innerWidth <= 768,
      md: window.innerWidth <= 1024,
      lg: window.innerWidth > 1024,
    };
  }
}
