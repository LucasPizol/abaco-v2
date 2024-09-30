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
    path: 'test',
    loadComponent: () => import('./pages/test/test.component').then(m => m.TestComponent),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
]