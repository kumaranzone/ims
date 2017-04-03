import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SoftwareUpdateComponent } from './softwareUpdate.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'softwareUpdate', component: SoftwareUpdateComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SoftwareUpdateRoutingModule { }
