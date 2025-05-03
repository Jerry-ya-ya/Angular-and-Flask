import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareComponent } from './square.component';

import { SquareRoutingModule } from './square-routing.module';

@NgModule({
  declarations: [
    SquareComponent
  ],
  imports: [
    CommonModule,
    SquareRoutingModule,
  ]
})
export class SquareModule { }
