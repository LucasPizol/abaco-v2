import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-text',
  standalone: true,
  imports: [],
  templateUrl: './sub-text.component.html',
})
export class SubTextComponent {
  @Input() text: string = ''
}