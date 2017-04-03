import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MailBehaviourComponent } from './mailBehaviour.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'mailBehaviour', component: MailBehaviourComponent }
    ])
  ],
  exports: [RouterModule]
})
export class MailBehaviourRoutingModule { }
