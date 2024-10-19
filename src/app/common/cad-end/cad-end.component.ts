import { Component } from '@angular/core';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { TitlesComponent } from '../../components/titles/titles.component';
import { SubTextComponent } from '../../components/sub-text/sub-text.component';
import { BtnDownComponent } from '../../components/buttons/btn-down/btn-down.component';
import { InputLongComponent } from '../../components/inputs/input-long/input-long.component';
import { SelectShortComponent } from '../../components/select-short/select-short.component';
import { SelectLongComponent } from '../../components/select-long/select-long.component';
import { InputShortComponent } from '../../components/inputs/input-short/input-short.component';
import { InputLoginComponent } from "../../components/inputs/input-login/input-login.component";

@Component({
  selector: 'app-cad-end',
  standalone: true,
  imports: [ListDivComponent, ReorganizeInputComponent, ReorganizesMainComponent, TitlesComponent, SubTextComponent,
    BtnDownComponent, InputLongComponent, InputShortComponent, SelectShortComponent, SelectLongComponent, InputLoginComponent],
  templateUrl: './cad-end.component.html',
})
export class CadEndComponent {

}
