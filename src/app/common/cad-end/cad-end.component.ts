import { Component } from '@angular/core'
import { ListDivComponent } from '../../components/list-div/list-div.component'
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component'
import { TitlesComponent } from '../../components/titles/titles.component'
import { SubTextComponent } from '../../components/sub-text/sub-text.component'
import { BtnDownComponent } from '../../components/buttons/btn-down/btn-down.component'
import { InputsComponent } from '../../components/inputs/inputs.component'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-cad-end',
  standalone: true,
  imports: [
    ListDivComponent,
    ReorganizeInputComponent,
    TitlesComponent,
    SubTextComponent,
    BtnDownComponent,
    InputsComponent,
    FormsModule,
  ],
  templateUrl: './cad-end.component.html',
})
export class CadEndComponent {}
