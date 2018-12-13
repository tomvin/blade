import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BladeModule } from 'src/blade/blade.module';
import { CoreModule } from './modules/core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardsModule } from './modules/dashboards/dashboards.module';
import { ComponentsModule } from './modules/components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BladeModule,
    CoreModule,
    FontAwesomeModule,
    DashboardsModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
