import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { StancesPage } from '../stances/stances';

@Component({
  selector: 'page-orientation',
  templateUrl: 'orientation.html'
})
export class OrientationPage {

  constructor(public navCtrl: NavController) {
  }

  next() {
      this.navCtrl.push(StancesPage)
  }

}
