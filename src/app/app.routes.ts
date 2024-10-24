import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'teacher',
    loadComponent: () => import('./pages/teacher/teacher.component').then(m => m.TeacherComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'calendario',
    loadComponent: () => import('./pages/calendario/calendario.component').then(m => m.CalendarioComponent)
  },
  {
    path: 'cadastroestudante',
    loadComponent: () => import('./pages/cadastroEstudante/cadastroEstudante.component').then(m => m.CadastroEstudanteComponent)
  },
  {
    path: 'cadastroendereco',
    loadComponent: () => import('./pages/cadastroEndereco/cadastroEndereco.component').then(m => m.CadastroEnderecoComponent)
  },
  {
    path: 'lancarnotas',
    loadComponent: () => import('./pages/lancarNota/lancarNota.component').then(m => m.LancarNotaComponent)
  },
  {
    path: 'lancarfaltas',
    loadComponent: () => import('./pages/lancarFalta/lancarFalta.component').then(m => m.LancarFaltaComponent)
  },
  {
    path: 'listestudante',
    loadComponent: () => import('./pages/listEstudante/listEstudante.component').then(m => m.ListEstudanteComponent)
  },  
  {
    path: 'listdocente',
    loadComponent: () => import('./pages/listDocente/listDocente.component').then(m => m.ListDocenteComponent)
  },
  {
    path: 'listaulas',
    loadComponent: () => import('./pages/listAulas/listAulas.component').then(m => m.ListAulasComponent)
  },
  {
    path: 'listfrequencia',
    loadComponent: () => import('./pages/listFrequencia/listFrequencia.component').then(m => m.ListFrequenciaComponent)
  },
  {
<<<<<<< HEAD
    path: 'calendario',
    loadComponent: () => import('./pages/calendario/calendario.component').then(m => m.CalendarioComponent)
=======
    path: 'criaraulas',
    loadComponent: () => import('./pages/criarAula/criarAula.component').then(m => m.CriarAulaComponent)
>>>>>>> 6060a00d25dcf0651d9fe27cada8cbbb508d5e41
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
]