import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../../common/aside/aside.component';
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { ReorganizesDivComponent } from "../../components/reorganizes-div/reorganizes-div.component";
import { MainDivComponent } from '../../components/main-div/main-div.component';
import { LaunchNotasComponent } from '../../common/launch-notas/launch-notas.component';

@Component({
  selector: 'app-lancar-nota',
  standalone: true,
  imports: [RouterModule, AsideComponent, ReorganizesDivComponent, ReorganizesMainComponent, MainDivComponent, LaunchNotasComponent],
  templateUrl: './lancarNota.component.html'
})
export class LancarNotaComponent {

}
