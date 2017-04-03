import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';
import { PasswordRoutingModule } from './password-routing.module';

@NgModule({
  imports: [CommonModule, PasswordRoutingModule],
  declarations: [PasswordComponent],
  exports: [PasswordComponent]
})
export class PasswordModule { }
