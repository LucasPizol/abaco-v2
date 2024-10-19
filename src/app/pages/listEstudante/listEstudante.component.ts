import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../../common/aside/aside.component';
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { ReorganizesDivComponent } from "../../components/reorganizes-div/reorganizes-div.component";
import { MainDivComponent } from '../../components/main-div/main-div.component';
import { ListEstComponent } from "../../common/list-est/list-est.component";



@Component({
  selector: 'app-list-estudante',
  standalone: true,
  imports: [RouterModule, AsideComponent, ReorganizesMainComponent, ReorganizesDivComponent, MainDivComponent, ListEstComponent],
  templateUrl: './listEstudante.component.html',
})
export class ListEstudanteComponent {

}
