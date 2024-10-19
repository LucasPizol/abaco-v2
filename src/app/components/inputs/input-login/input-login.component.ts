import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-login',
  standalone: true,
  imports: [],
  templateUrl: './input-login.component.html',
})
export class InputLoginComponent {
  @Input() value: string = '';
  @Input() placeholder: string = '';
}
