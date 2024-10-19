import { Component, Input } from '@angular/core';
import { ImgArrowDownComponent } from '../images/img-arrow-down/img-arrow-down.component';

@Component({
  selector: 'app-selecionar',
  standalone: true,
  imports: [ImgArrowDownComponent],
  templateUrl: "./selecionar.component.html"
})
export class SelecionarComponent {
  @Input() placeholder: string = '';
}