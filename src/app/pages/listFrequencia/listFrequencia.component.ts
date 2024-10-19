import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../../common/aside/aside.component';
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { ReorganizesDivComponent } from "../../components/reorganizes-div/reorganizes-div.component";
import { MainDivComponent } from '../../components/main-div/main-div.component';
import { ListFreqComponent } from '../../common/list-freq/list-freq.component';

@Component({
  selector: 'app-list-frequencia',
  standalone: true,
  imports: [RouterModule, AsideComponent, ReorganizesMainComponent, ReorganizesDivComponent, MainDivComponent, ListFreqComponent],
  templateUrl: './listFrequencia.component.html'
})
export class ListFrequenciaComponent {

}
