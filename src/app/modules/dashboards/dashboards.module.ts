import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardOnePageComponent } from './pages/dashboard-one-page/dashboard-one-page.component';
import { DashboardTwoPageComponent } from './pages/dashboard-two-page/dashboard-two-page.component';

@NgModule({
  declarations: [DashboardOnePageComponent, DashboardTwoPageComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardsModule { }
