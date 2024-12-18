import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-btn',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-btn.component.html',

})
export class MainBtnComponent {
  @Input() text: string = '';
  @Input() route: string = '';
}
