import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../../common/aside/aside.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { CadEstComponent } from '../../common/cad-est/cad-est.component';

@Component({
  selector: 'app-cadastro-estudante',
  standalone: true,
  imports: [RouterModule, AsideComponent, ReorganizesMainComponent, CadEstComponent],
  templateUrl: './cadastroEstudante.component.html',
})
export class CadastroEstudanteComponent {

}
