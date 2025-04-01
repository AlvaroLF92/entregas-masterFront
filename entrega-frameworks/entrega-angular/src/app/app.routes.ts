import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/public/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/public/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/public/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },

  {
    path: 'gallery',
    loadComponent: () =>
      import('./pages/private/gallery/gallery.component').then(
        (m) => m.GalleryComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/private/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'crud',
    loadComponent: () =>
      import('./pages/private/crud/crud.component').then(
        (m) => m.CrudComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/private/profile/profile.component').then(
        (m) => m.ProfileComponent
      ),
    canActivate: [AuthGuard],
  },

  { path: '**', redirectTo: 'login' },
];
