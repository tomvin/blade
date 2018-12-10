import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TopBarComponent, SideBarComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [TopBarComponent, SideBarComponent]
})
export class CoreModule { }
