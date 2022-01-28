import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';
import { RouterModule } from '@angular/router';
import { OverlayComponent } from './overlay/overlay.component';



@NgModule({
  declarations: [
    HeaderComponent,
    OverlayComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    OverlayComponent
  ]
})
export class SharedModule { }
