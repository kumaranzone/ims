import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PasswordComponent } from './password.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'password', component: PasswordComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PasswordRoutingModule { }
