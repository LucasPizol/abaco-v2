import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { AsideComponent } from "../../common/aside/aside.component";
import { ListDocComponent } from "../../common/list-doc/list-doc.component";

@Component({
  selector: 'app-list-docente',
  standalone: true,
  imports: [RouterModule, ReorganizesMainComponent, AsideComponent, ListDocComponent],
  templateUrl: './listDocente.component.html',
})
export class ListDocenteComponent {

}
