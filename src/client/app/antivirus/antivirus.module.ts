import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntivirusComponent } from './antivirus.component';
import { AntivirusRoutingModule } from './antivirus-routing.module';

@NgModule({
  imports: [CommonModule, AntivirusRoutingModule],
  declarations: [AntivirusComponent],
  exports: [AntivirusComponent]
})
export class AntivirusModule { }
