import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../../common/aside/aside.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { CadEndComponent } from '../../common/cad-end/cad-end.component';


@Component({
  selector: 'app-cadastro-endereco',
  standalone: true,
  imports: [RouterModule, AsideComponent, ReorganizesMainComponent, CadEndComponent],
  templateUrl: './cadastroEndereco.component.html',
})
export class CadastroEnderecoComponent {

}
