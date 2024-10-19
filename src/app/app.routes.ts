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
    path: 'listestudante',
    loadComponent: () => import('./pages/listEstudante/listEstudante.component').then(m => m.ListEstudanteComponent)
  },
  {
    path: 'lancarnotas',
    loadComponent: () => import('./pages/lancarNota/lancarNota.component').then(m => m.LancarNotaComponent)
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
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
]