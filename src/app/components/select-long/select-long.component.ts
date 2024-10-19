import { Component, Input } from '@angular/core';
import { ImgArrowDownComponent } from '../images/img-arrow-down/img-arrow-down.component';

@Component({
  selector: 'app-select-long',
  standalone: true,
  imports: [ImgArrowDownComponent],
  templateUrl: "./select-long.component.html"
})
export class SelectLongComponent {
  @Input() placeholder: string = '';
  @Input() value: string = '';
}