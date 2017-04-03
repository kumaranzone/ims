import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnlineUseComponent } from './onlineUse.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'onlineUse', component: OnlineUseComponent }
    ])
  ],
  exports: [RouterModule]
})
export class OnlineUseRoutingModule { }
