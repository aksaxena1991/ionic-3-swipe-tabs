import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';
import {SuperTabsModule} from 'ionic2-super-tabs';
@NgModule({
  declarations: [
    NewsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
    SuperTabsModule
  ],
})
export class NewsPageModule {}
