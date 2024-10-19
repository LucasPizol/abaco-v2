import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../../common/aside/aside.component';
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { ReorganizesDivComponent } from "../../components/reorganizes-div/reorganizes-div.component";
import { MainDivComponent } from '../../components/main-div/main-div.component';
import { ListDocComponent } from "../../common/list-doc/list-doc.component";




@Component({
  selector: 'app-list-docente',
  standalone: true,
  imports: [RouterModule, AsideComponent, ReorganizesMainComponent, ReorganizesDivComponent, MainDivComponent, ListDocComponent],
  templateUrl: './listDocente.component.html',
})
export class ListDocenteComponent {

}
