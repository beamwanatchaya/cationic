import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatFeedPage } from './cat-feed.page';

const routes: Routes = [
  {
    path: '',
    component: CatFeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatFeedPageRoutingModule {}
