import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuItemService } from './services/menu-item/menu-item.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopBarComponent, SideBarComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  providers: [
    MenuItemService
  ],
  exports: [TopBarComponent, SideBarComponent]
})
export class CoreModule { }
