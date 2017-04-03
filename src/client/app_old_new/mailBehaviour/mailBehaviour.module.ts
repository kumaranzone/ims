import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailBehaviourComponent } from './mailBehaviour.component';
import { MailBehaviourRoutingModule } from './mailBehaviour-routing.module';

@NgModule({
  imports: [CommonModule, MailBehaviourRoutingModule],
  declarations: [MailBehaviourComponent],
  exports: [MailBehaviourComponent]
})
export class MailBehaviourModule { }
