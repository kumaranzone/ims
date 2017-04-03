import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './contactInfo.component';
import { ContactInfoRoutingModule } from './contactInfo-routing.module';

@NgModule({
  imports: [CommonModule, ContactInfoRoutingModule],
  declarations: [ContactInfoComponent],
  exports: [ContactInfoComponent]
})
export class ContactInfoModule { }
