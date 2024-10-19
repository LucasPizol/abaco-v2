import { Component, Input } from '@angular/core';
import { ImgArrowDownComponent } from '../images/img-arrow-down/img-arrow-down.component';

@Component({
  selector: 'app-select-short',
  standalone: true,
  imports: [ImgArrowDownComponent],
  templateUrl: "./select-short.component.html"
})
export class SelectShortComponent {
  @Input() placeholder: string = '';
}