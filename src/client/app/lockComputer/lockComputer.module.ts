import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LockComputerComponent } from './lockComputer.component';
import { LockComputerRoutingModule } from './lockComputer-routing.module';

@NgModule({
  imports: [CommonModule, LockComputerRoutingModule],
  declarations: [LockComputerComponent],
  exports: [LockComputerComponent]
})
export class LockComputerModule { }
