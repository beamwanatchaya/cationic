import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatFeedPageRoutingModule } from './cat-feed-routing.module';

import { CatFeedPage } from './cat-feed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatFeedPageRoutingModule
  ],
  declarations: [CatFeedPage]
})
export class CatFeedPageModule {}
