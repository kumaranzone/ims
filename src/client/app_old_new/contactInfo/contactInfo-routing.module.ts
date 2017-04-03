import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactInfoComponent } from './contactInfo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'contactInfo', component: ContactInfoComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ContactInfoRoutingModule { }
