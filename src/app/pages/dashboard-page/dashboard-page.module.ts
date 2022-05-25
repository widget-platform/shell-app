import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page.component';
import {RouterModule} from "@angular/router";
import {DashboardHeaderModule} from "./components/dashboard-header/dashboard-header.module";
import {DashboardGridModule} from "./components/dashboard-grid/dashboard-grid.module";



@NgModule({
  declarations: [
    DashboardPageComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: DashboardPageComponent,
        }]),
        DashboardHeaderModule,
        DashboardGridModule
    ]
})
export class DashboardPageModule { }
