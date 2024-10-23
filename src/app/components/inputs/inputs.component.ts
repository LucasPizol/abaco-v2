import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [],
  templateUrl: './inputs.component.html',
})
export class InputsComponent {
  @Input() value: String = "";
  @Input() placeholder: String = "";
  @Input() type: String = "";
}
