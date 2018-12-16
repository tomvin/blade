import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardOnePageComponent } from './modules/dashboards/pages/dashboard-one-page/dashboard-one-page.component';
import { DashboardTwoPageComponent } from './modules/dashboards/pages/dashboard-two-page/dashboard-two-page.component';
import { ButtonsPageComponent } from './modules/components/pages/buttons-page/buttons-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard/one'
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    redirectTo: 'dashboard/one'
  },
  {
    path: 'dashboard/one',
    pathMatch: 'full',
    component: DashboardOnePageComponent
  },
  {
    path: 'dashboard/two',
    pathMatch: 'full',
    component: DashboardTwoPageComponent
  },
  {
    path: 'component',
    pathMatch: 'full',
    redirectTo: 'component/button'
  },
  {
    path: 'component/button',
    pathMatch: 'full',
    component: ButtonsPageComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard/one'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
