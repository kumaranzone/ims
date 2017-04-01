import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AntivirusComponent } from './antivirus.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'about', component: AntivirusComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AntivirusRoutingModule { }
