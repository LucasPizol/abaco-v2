import { Component, Input } from '@angular/core';
import { ImgArrowDownComponent } from '../../images/img-arrow-down/img-arrow-down.component';

@Component({
  selector: 'app-input-short',
  standalone: true,
  imports: [ImgArrowDownComponent],
  templateUrl: "./input-short.component.html"
})
export class InputShortComponent {
  @Input() placeholder: string = '';
  @Input() type: string = '';
}