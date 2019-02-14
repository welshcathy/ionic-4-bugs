import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dateOne: Date;
  datePickerObj: any = {
    fromDate: new Date(),
    showTodayButton: false,
    titleLabel: 'Expected End Date',
    clearButton: false
  };


  newLineForm = new FormGroup({
    dateOne: new FormControl('')
  });


  constructor(
    private menu: MenuController
  ) {

  }

  ionViewWillEnter() {
    console.log('Home ionViewWillEnter()');
    this.menu.enable(true, 'menuOne');
    this.menu.enable(false, 'menuTwo');
  }

}
