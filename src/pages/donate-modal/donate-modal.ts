import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';
// import { TabsPage } from '../tabs/tabs';

declare var google;

@Component({
  selector: 'donate-modal',
  templateUrl: 'donate-modal.html'
})
export class DonateModal {

  private donateAmount: number

  constructor(private navParams: NavParams, public viewCtrl: ViewController) {
    this.donateAmount
  }
  dismiss(data?: any) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(data);
  }

  submit() {
      // TODO: add thank you message
      this.dismiss()
  }
}
