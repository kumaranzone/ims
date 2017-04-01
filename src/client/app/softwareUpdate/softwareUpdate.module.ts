import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareUpdateComponent } from './softwareUpdate.component';
import { SoftwareUpdateRoutingModule } from './softwareUpdate-routing.module';

@NgModule({
  imports: [CommonModule, SoftwareUpdateRoutingModule],
  declarations: [SoftwareUpdateComponent],
  exports: [SoftwareUpdateComponent]
})
export class SoftwareUpdateModule { }
