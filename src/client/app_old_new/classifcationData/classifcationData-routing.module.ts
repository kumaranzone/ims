import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClassifcationDataComponent } from './classifcationData.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'classifcationData', component: ClassifcationDataComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ClassifcationDataRoutingModule { }
