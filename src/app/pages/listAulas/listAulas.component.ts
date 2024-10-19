import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../../common/aside/aside.component';
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { ReorganizesDivComponent } from "../../components/reorganizes-div/reorganizes-div.component";
import { MainDivComponent } from '../../components/main-div/main-div.component';
import { ListAulaComponent } from "../../common/list-aula/list-aula.component";




@Component({
  selector: 'app-list-aulas',
  standalone: true,
  imports: [RouterModule, AsideComponent, ReorganizesMainComponent, ReorganizesDivComponent, MainDivComponent, ListAulaComponent],
  templateUrl: './listAulas.component.html',
})
export class ListAulasComponent {

}
