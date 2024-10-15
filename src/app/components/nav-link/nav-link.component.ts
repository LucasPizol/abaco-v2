import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-link.component.html',
  template:  `
  <a [routerLink]="route" routerLinkActive="active" class="text-white">
    {{ label }}
  </a>
`,
})
export class NavLinkComponent {
  @Input() route: string = '';
  @Input() label: string = '';
}
