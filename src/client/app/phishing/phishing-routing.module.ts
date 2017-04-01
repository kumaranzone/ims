import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PhishingComponent } from './phishing.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'phishing', component: PhishingComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PhishingRoutingModule { }
