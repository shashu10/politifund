import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { OrientationPage } from '../orientation/orientation';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username: string
  password: string
  constructor(public navCtrl: NavController) {

  }

  doLogin() {
      this.navCtrl.push(OrientationPage)
  }
}
