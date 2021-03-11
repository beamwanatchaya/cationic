import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatFoodPageRoutingModule } from './cat-food-routing.module';

import { CatFoodPage } from './cat-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatFoodPageRoutingModule
  ],
  declarations: [CatFoodPage]
})
export class CatFoodPageModule {}
