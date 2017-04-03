import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineUseComponent } from './onlineUse.component';
import { OnlineUseRoutingModule } from './onlineUse-routing.module';

@NgModule({
  imports: [CommonModule, OnlineUseRoutingModule],
  declarations: [OnlineUseComponent],
  exports: [OnlineUseComponent]
})
export class OnlineUseModule { }
