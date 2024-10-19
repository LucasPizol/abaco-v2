import { Component } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";
import { PesquisaComponent } from "../../components/pesquisa/pesquisa.component";
import { ListBgComponent } from "../../components/list-bg/list-bg.component";
import { ImgEditComponent } from "../../components/images/img-edit/img-edit.component";
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { TitlesComponent } from '../../components/titles/titles.component';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { SelecionarComponent } from '../../components/selecionar/selecionar.component';
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component';
import { DatePickerComponent} from '../../components/datepicker/datepicker.component';


@Component({
  selector: 'app-launch-notas',
  standalone: true,
  imports: [AsideComponent, PesquisaComponent, ListBgComponent, ImgEditComponent, ListDivComponent, 
    ReorganizesMainComponent, TitlesComponent, SelecionarComponent, ReorganizeInputComponent, DatePickerComponent ],
  templateUrl: './launch-notas.component.html'
})
export class LaunchNotasComponent {

}
