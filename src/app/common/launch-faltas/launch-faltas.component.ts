import { Component } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";
import { PesquisaComponent } from "../../components/pesquisa/pesquisa.component";
import { ListBgComponent } from "../../components/list-bg/list-bg.component";
import { ImgEditComponent } from "../../components/images/img-edit/img-edit.component";
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { TitlesComponent } from '../../components/titles/titles.component';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { SelectShortComponent } from '../../components/select-short/select-short.component';
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component';
import { DatePickerComponent} from '../../components/datepicker/datepicker.component';
import { BtnDownComponent } from '../../components/buttons/btn-down/btn-down.component';
import { CheckboxComponent } from "../../components/checkbox/checkbox.component";


@Component({
  selector: 'app-launch-faltas',
  standalone: true,
  imports: [AsideComponent, PesquisaComponent, ListBgComponent, ImgEditComponent, ListDivComponent,
    ReorganizesMainComponent, TitlesComponent, SelectShortComponent, ReorganizeInputComponent, DatePickerComponent, BtnDownComponent, CheckboxComponent],
  templateUrl: './launch-faltas.component.html',
})
export class LaunchFaltasComponent {

}
