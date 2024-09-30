import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titles',
  standalone: true,
  imports: [],
  templateUrl: './titles.component.html',
})
export class TitlesComponent {
  @Input() text: string = ''
}
