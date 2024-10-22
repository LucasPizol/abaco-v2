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
    path: 'calendario',
    loadComponent: () => import('./pages/calendario/calendario.component').then(m => m.CalendarioComponent)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
]