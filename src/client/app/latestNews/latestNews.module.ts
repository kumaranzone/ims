import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestNewsComponent } from './latestNews.component';
import { LatestNewsRoutingModule } from './latestNews-routing.module';

@NgModule({
  imports: [CommonModule, LatestNewsRoutingModule],
  declarations: [LatestNewsComponent],
  exports: [LatestNewsComponent]
})
export class LatestNewsModule { }
