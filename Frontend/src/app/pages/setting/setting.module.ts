import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';

import { SettingRoutingModule } from './setting-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
  ]
})
export class SettingModule { }