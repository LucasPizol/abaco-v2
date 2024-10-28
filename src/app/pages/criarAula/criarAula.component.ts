import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../../common/aside/aside.component';
import { ReorganizesMainComponent } from '../../components/reorganizes-main/reorganizes-main.component';
import { CreateClassComponent } from '../../common/create-class/create-class.component';

@Component({
  selector: 'app-criar-aula',
  standalone: true,
  imports: [RouterModule, AsideComponent, ReorganizesMainComponent, CreateClassComponent],
  templateUrl: './criarAula.component.html'
})
export class CriarAulaComponent {

}
