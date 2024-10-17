import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReorganizesMainComponent } from "../../components/reorganizes-main/reorganizes-main.component";
import { AsideComponent } from "../../common/aside/aside.component";
import { DivBackgroundComponent } from "../../components/div-background/div-background.component";
import { TitlesComponent } from "../../components/titles/titles.component";

@Component({
  selector: 'app-cadAluno',
  standalone: true,
  imports: [RouterModule, ReorganizesMainComponent, AsideComponent, DivBackgroundComponent, TitlesComponent],
  templateUrl: './cadAluno.component.html',
})
export class CadastroAlunoComponent {

}
