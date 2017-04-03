import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LatestNewsComponent } from './latestNews.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'latestNews', component: LatestNewsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class LatestNewsRoutingModule { }
