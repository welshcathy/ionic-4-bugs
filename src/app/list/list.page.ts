import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {

  constructor(
    private menu: MenuController
  ) {

  }

  ionViewWillEnter() {
    console.log('Home ionViewWillEnter()');
    this.menu.enable(false, 'menuOne');
    this.menu.enable(true, 'menuTwo');
  }
}
