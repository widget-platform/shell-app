import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import {RouterModule} from "@angular/router";
import {TuiFieldErrorModule, TuiInputModule, TuiIslandModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiHintControllerModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: LoginPageComponent,
    }]),
    TuiIslandModule,
    TuiInputModule,
    TuiFieldErrorModule,
    TuiHintControllerModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
  ]
})
export class LoginPageModule { }
