import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard-page/dashboard-page.module').then(m => m.DashboardPageModule),
  },
  {
    path: 'side',
    loadChildren: () => import('sideWidget/Module').then(m => m.AppModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
