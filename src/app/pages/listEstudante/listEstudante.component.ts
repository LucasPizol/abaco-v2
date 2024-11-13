import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListEstComponent } from "../../common/list-est/list-est.component";


@Component({
  selector: 'app-list-estudante',
  standalone: true,
  imports: [RouterModule, ListEstComponent],
  templateUrl: './listEstudante.component.html',
})
export class ListEstudanteComponent {

}
