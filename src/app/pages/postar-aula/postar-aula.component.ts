import { Component } from '@angular/core';
import { PostarAulasComponent } from "../../common/postar-aulas/postar-aulas.component";

@Component({
  selector: 'app-postar-aula',
  standalone: true,
  imports: [ PostarAulasComponent],
  templateUrl: './postar-aula.component.html'
})
export class PostarAulaComponent {

}
