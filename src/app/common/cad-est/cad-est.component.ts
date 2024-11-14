import { Component } from '@angular/core';
import { ListDivComponent } from '../../components/list-div/list-div.component';
import { ReorganizeInputComponent } from '../../components/reorganize-input/reorganize-input.component';
import { TitlesComponent } from '../../components/titles/titles.component';
import { SubTextComponent } from '../../components/sub-text/sub-text.component';
import { InputsComponent } from '../../components/inputs/inputs.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/buttons/button.component';
import { GridComponent } from '../../components/grid/grid.component';

@Component({
  selector: 'app-cad-est',
  standalone: true,
  imports: [
    ListDivComponent,
    ReorganizeInputComponent,
    TitlesComponent,
    SubTextComponent,
    InputsComponent,
    CommonModule,
    ButtonComponent,
    GridComponent
  ],
  templateUrl: './cad-est.component.html',
})
export class CadEstComponent {
  state = 0;

  getStateProps() {
    if (this.state === 0) {
      return 'Dados Pessoais';
    }

    return 'Endereço';
  }

  firstState() {
    return this.state === 0;
  }

  secondState() {
    return this.state === 1;
  }

  handleNextState() {
    this.state += 1;
  }
}
