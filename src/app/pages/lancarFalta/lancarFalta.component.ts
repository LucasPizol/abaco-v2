import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../../common/aside/aside.component';
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { ReorganizesDivComponent } from "../../components/reorganizes-div/reorganizes-div.component";
import { MainDivComponent } from '../../components/main-div/main-div.component';
import { LaunchFaltasComponent } from '../../common/launch-faltas/launch-faltas.component';


@Component({
  selector: 'app-lancar-falta',
  standalone: true,
  imports: [RouterModule, AsideComponent, ReorganizesMainComponent, ReorganizesDivComponent, MainDivComponent, LaunchFaltasComponent],
  templateUrl: './lancarFalta.component.html',
})
export class LancarFaltaComponent {

}
