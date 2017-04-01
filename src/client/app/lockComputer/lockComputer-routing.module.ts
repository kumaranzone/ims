import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LockComputerComponent } from './lockComputer.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'lockComputer', component: LockComputerComponent }
    ])
  ],
  exports: [RouterModule]
})
export class LockComputerRoutingModule { }
