import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from './dashboard-header.component';
import {
  TuiButtonModule,
  TuiDataListModule, TuiDialogModule,
  TuiDropdownControllerModule,
  TuiHostedDropdownModule,
  TuiSvgModule
} from "@taiga-ui/core";



@NgModule({
  declarations: [
    DashboardHeaderComponent
  ],
  imports: [
    CommonModule,
    TuiSvgModule,
    TuiHostedDropdownModule,
    TuiDropdownControllerModule,
    TuiButtonModule,
    TuiDataListModule,
    TuiDialogModule
  ],
  exports: [
    DashboardHeaderComponent,
  ]
})
export class DashboardHeaderModule { }
