import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-btn-down',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './btn-down.component.html',

})
export class BtnDownComponent {
  @Input() text: string = '';
  @Input() route: string = '';
  @Input() className: string = '';
}
