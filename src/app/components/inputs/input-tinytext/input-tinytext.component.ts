import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-tinytext',
  standalone: true,
  imports: [],
  templateUrl: './input-tinytext.component.html'
})
export class InputTinytextComponent {
  @Input() type: string = '';
  @Input() placeholder: string = '';
}
