import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
//   {
//     path: 'login',
//     loadChildren: 'app/pages/login/login.module#LoginModule'
//   },
//   {
//     path: 'register',
//     loadChildren: 'app/pages/register/register.module#RegisterModule'
//   },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'about', loadChildren: 'app/pages/about/about.module#AboutModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
