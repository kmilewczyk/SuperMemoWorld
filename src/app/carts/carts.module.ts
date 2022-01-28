import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion'

import { CartsRoutingModule } from './carts-routing.module';
import { CartsComponent } from './carts.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    CommonModule,
    CartsRoutingModule,
    AccordionModule,
    SharedModule
  ]
})
export class CartsModule { }
