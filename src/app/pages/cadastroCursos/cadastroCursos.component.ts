import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CadastroCursoComponent } from '../../common/cadastro-curso/cadastro-curso.component'

@Component({
  selector: 'app-cadastro-cursos',
  standalone: true,
  imports: [RouterModule, CadastroCursoComponent],
  templateUrl: './cadastroCursos.component.html',
})
export class CadastroCursosComponent {}
