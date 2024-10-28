import { Component } from '@angular/core';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { TitlesComponent } from '../../components/titles/titles.component';
import { SubTextComponent } from '../../components/sub-text/sub-text.component';
import { BtnDownComponent } from '../../components/buttons/btn-down/btn-down.component';
import { InputsComponent } from '../../components/inputs/inputs.component';


@Component({
  selector: 'app-cad-end',
  standalone: true,
  imports: [ListDivComponent, ReorganizeInputComponent, ReorganizesMainComponent, TitlesComponent, SubTextComponent,
    BtnDownComponent, InputsComponent],
  templateUrl: './cad-end.component.html',
})
export class CadEndComponent {

}
