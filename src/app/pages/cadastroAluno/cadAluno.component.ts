import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../../common/aside/aside.component';
import { MainComponent } from "../../common/main/main.component";
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { InputsComponent } from "../../components/inputs/inputs.component";
import { MainDivComponent } from "../../components/main-div/main-div.component";
import { TitlesComponent } from "../../components/titles/titles.component";
import { SubTextComponent } from "../../components/sub-text/sub-text.component";


@Component({
  selector: 'app-cadAluno',
  standalone: true,
  imports: [RouterModule, AsideComponent, MainComponent, ReorganizesMainComponent, InputsComponent, MainDivComponent, TitlesComponent,
    SubTextComponent],
  templateUrl: './cadAluno.component.html',
})
export class CadastroAlunoComponent {

}
