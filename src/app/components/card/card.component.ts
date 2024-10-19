import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() label: string = '';
  @Input() route: string = '';
}
