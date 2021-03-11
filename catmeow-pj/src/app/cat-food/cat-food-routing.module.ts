import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatFoodPage } from './cat-food.page';

const routes: Routes = [
  {
    path: '',
    component: CatFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatFoodPageRoutingModule {}
