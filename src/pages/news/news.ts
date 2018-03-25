import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SuperTab, SuperTabsController} from 'ionic2-super-tabs';
@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  rootNavCtrl:NavController;
  constructor(private superTabsCtrl:SuperTabsController, public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = this.navParams.get('rootNavCtrl');
  }

  goToDetails() {
    this.rootNavCtrl.push('NewsDetailsPage');
  }
  setBadge(){
  this.superTabsCtrl.setBadge('aboutTab',3);
  }
  clearBadge(){
    this.superTabsCtrl.clearBadge('aboutTab');
  }
  hideToolbar(){
    this.superTabsCtrl.showToolbar(false);
  }
  showToolbar(){
    this.superTabsCtrl.showToolbar(true);
  }
  jumpToAccount(){
    this.superTabsCtrl.slideTo(2);
  }
}
