import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'chi-siamo',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'servizi',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'strutture',
    loadComponent: () => import('./pages/facilities/facilities.component').then(m => m.FacilitiesComponent)
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent)
  },
  {
    path: 'contatti',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'coinvolgiti',
    loadComponent: () => import('./pages/get-involved/get-involved.component').then(m => m.GetInvolvedComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];