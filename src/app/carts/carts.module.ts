import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion'

import { CartsRoutingModule } from './carts-routing.module';
import { CartsComponent } from './carts.component';


@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    CommonModule,
    CartsRoutingModule,
    AccordionModule
  ]
})
export class CartsModule { }
