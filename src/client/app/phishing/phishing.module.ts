import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhishingComponent } from './phishing.component';
import { PhishingRoutingModule } from './phishing-routing.module';

@NgModule({
  imports: [CommonModule, PhishingRoutingModule],
  declarations: [PhishingComponent],
  exports: [PhishingComponent]
})
export class PhishingModule { }
