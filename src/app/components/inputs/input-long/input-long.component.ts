import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-long',
  standalone: true,
  imports: [],
  templateUrl: './input-long.component.html',
})
export class InputLongComponent {
  @Input() type: string = '';
  @Input() placeholder: string = '';
}
