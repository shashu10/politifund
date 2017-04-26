import { Component } from '@angular/core';

import { NavParams, ModalController } from 'ionic-angular';
import { DonateModal } from '../donate-modal/donate-modal';

declare var google;

@Component({
  selector: 'page-campaign-detail',
  templateUrl: 'campaign-detail.html'
})
export class CampaignDetailPage {

  private campaign

  constructor(private navParams: NavParams, public modalCtrl: ModalController) {
    this.campaign = navParams.get('campaign');
  }
  ionViewDidLoad() {

  }
  donate() {
    let modal = this.modalCtrl.create(DonateModal);
    modal.present();
  }
}
