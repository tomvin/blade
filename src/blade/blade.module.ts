import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageComponent } from './components/page/page.component';

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [PageComponent]
})
export class BladeModule { }
