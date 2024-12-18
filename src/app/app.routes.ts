import { Router, Routes } from '@angular/router'
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard'
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard'
import { TeacherComponent } from './pages/teacher/teacher.component'
import { LoginComponent } from './pages/login/login.component'
import { AuthenticationService } from './api/services/authentication.service'
import { CadastroEstudanteComponent } from './pages/cadastroEstudante/cadastroEstudante.component'
import { CadastroEnderecoComponent } from './pages/cadastroEndereco/cadastroEndereco.component'
import { LancarNotaComponent } from './pages/lancarNota/lancarNota.component'
import { LancarFaltaComponent } from './pages/lancarFalta/lancarFalta.component'
import { ListEstudanteComponent } from './pages/listEstudante/listEstudante.component'
import { ListDocenteComponent } from './pages/listDocente/listDocente.component'
import { ListAulasComponent } from './pages/listAulas/listAulas.component'
import { ListFrequenciaComponent } from './pages/listFrequencia/listFrequencia.component'
import { CalendarioComponent } from './pages/calendario/calendario.component'
import { PostarAulaComponent } from './pages/postar-aula/postar-aula.component'
import { AuthorizationService } from './api/services/authorization.service'
import { CadastroCursoComponent } from './common/cadastro-curso/cadastro-curso.component'

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UsuarioNaoAutenticadoGuard],
    providers: [AuthenticationService, Router],
  },
  {
    path: 'teacher',
    component: TeacherComponent,
    canActivate: [UsuarioAutenticadoGuard],
    providers: [AuthenticationService],
  },
  {
    path: 'calendario',
    component: CalendarioComponent,
    canActivate: [UsuarioAutenticadoGuard],
    providers: [AuthenticationService],
  },
  {
    path: 'cadastroestudante',
    component: CadastroEstudanteComponent,
    canActivate: [UsuarioAutenticadoGuard],
    providers: [AuthenticationService],
  },
  {
    path: 'cadastroendereco',
    component: CadastroEnderecoComponent,
    canActivate: [UsuarioAutenticadoGuard],
    providers: [AuthenticationService],
  },
  {
    path: 'lancarnotas',
    component: LancarNotaComponent,
    canActivate: [UsuarioAutenticadoGuard],
    providers: [AuthenticationService],
  },
  {
    path: 'lancarfaltas',
    component: LancarFaltaComponent,
    canActivate: [UsuarioAutenticadoGuard],
    providers: [AuthenticationService],
  },
  {
    path: 'cadastrar-curso',
    component: CadastroCursoComponent,
    canActivate: [UsuarioAutenticadoGuard],
    providers: [AuthorizationService],
  },
  {
    path: 'listestudante',
    component: ListEstudanteComponent,
    canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: 'listdocente',
    component: ListDocenteComponent,
  },
  {
    path: 'listaulas',
    component: ListAulasComponent,
  },
  {
    path: 'listfrequencia',
    component: ListFrequenciaComponent,
  },
  {
    path: 'postaraula',
    component: PostarAulaComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
]
