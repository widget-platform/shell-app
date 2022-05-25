import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardGridComponent } from './dashboard-grid.component';
import {GridsterModule} from "angular-gridster2";



@NgModule({
    declarations: [
        DashboardGridComponent
    ],
    exports: [
        DashboardGridComponent
    ],
  imports: [
    CommonModule,
    GridsterModule
  ]
})
export class DashboardGridModule { }
