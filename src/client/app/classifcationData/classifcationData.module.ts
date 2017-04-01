import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassifcationDataComponent } from './classifcationData.component';
import { ClassifcationDataRoutingModule } from './classifcationData-routing.module';

@NgModule({
  imports: [CommonModule, ClassifcationDataRoutingModule],
  declarations: [ClassifcationDataComponent],
  exports: [ClassifcationDataComponent]
})
export class ClassifcationDataModule { }
