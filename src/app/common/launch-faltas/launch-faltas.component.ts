import { Component } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";
import { PesquisaComponent } from "../../components/pesquisa/pesquisa.component";
import { ImgEditComponent } from "../../components/images/img-edit/img-edit.component";
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { TitlesComponent } from '../../components/titles/titles.component';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component';
import { BtnDownComponent } from '../../components/buttons/btn-down/btn-down.component';
import { CheckboxComponent } from "../../components/checkbox/checkbox.component";
import { InputsComponent } from '../../components/inputs/inputs.component';



@Component({
  selector: 'app-launch-faltas',
  standalone: true,
  imports: [AsideComponent, PesquisaComponent, ImgEditComponent, ListDivComponent,
    ReorganizesMainComponent, TitlesComponent, ReorganizeInputComponent, BtnDownComponent, 
    CheckboxComponent, InputsComponent],
  templateUrl: './launch-faltas.component.html',
})
export class LaunchFaltasComponent {

}
