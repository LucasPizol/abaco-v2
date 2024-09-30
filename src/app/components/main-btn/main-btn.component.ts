import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-btn',
  standalone: true,
  imports: [],
  templateUrl: './main-btn.component.html',

})
export class MainBtnComponent {
  @Input() text: string = '';
}
