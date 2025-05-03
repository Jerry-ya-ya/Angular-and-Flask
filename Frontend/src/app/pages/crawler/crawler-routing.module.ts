import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrawlerComponent } from './crawler.component';

const routes: Routes = [
  {
    path: '',
    component: CrawlerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrawlerRoutingModule { }
