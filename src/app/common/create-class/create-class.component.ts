import { Component } from '@angular/core';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { TitlesComponent } from '../../components/titles/titles.component';
import { BtnDownComponent } from '../../components/buttons/btn-down/btn-down.component';
import { InputLongComponent } from '../../components/inputs/input-long/input-long.component';
import { SelectShortComponent } from '../../components/select-short/select-short.component';
import { InputTinytextComponent } from '../../components/inputs/input-tinytext/input-tinytext.component';


@Component({
  selector: 'app-create-class',
  standalone: true,
  imports: [ListDivComponent, ReorganizeInputComponent, ReorganizesMainComponent, TitlesComponent,
    BtnDownComponent, InputLongComponent, SelectShortComponent, InputLongComponent, InputTinytextComponent
  ],
  templateUrl: './create-class.component.html',

})
export class CreateClassComponent {

}
