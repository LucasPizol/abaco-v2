import { Component } from '@angular/core';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { TitlesComponent } from '../../components/titles/titles.component';
import { BtnDownComponent } from '../../components/buttons/btn-down/btn-down.component';
import { InputsComponent } from '../../components/inputs/inputs.component';
import { UploadComponent } from '../../components/upload/upload.component';


@Component({
  selector: 'app-create-class',
  standalone: true,
  imports: [ListDivComponent, ReorganizeInputComponent, ReorganizesMainComponent, TitlesComponent,
    BtnDownComponent, InputsComponent, UploadComponent],
  templateUrl: './create-class.component.html',

})
export class CreateClassComponent {

}
