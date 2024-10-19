import { Component, Input } from '@angular/core';
import { ImgSearchComponent } from '../images/img-search/img-search.component';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [ImgSearchComponent],
  templateUrl: "./pesquisa.component.html"
})
export class PesquisaComponent {
  @Input() type: string = '';
  @Input() placeholder: string = '';
}