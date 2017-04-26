import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CampaignDetailPage } from '../campaign-detail/campaign-detail';
import { IssuesService } from '../../services/issues'

@Component({
  selector: 'page-campaigns',
  templateUrl: 'campaigns.html'
})
export class CampaignsPage {

  campaigns: Array<{title: string, image: string, description?: string, likes: number }> = [
      {
        title: 'Yes on 62 (Television Ad)',
        image: "assets/campaigns/image07.jpg",
        likes: 92
      },
      {
        title: 'California Legalization of Marijuana',
        image: "assets/campaigns/image03.jpg",
        likes: 619
      },
      {
        title: 'Prop 64 - Revenue',
        image: "assets/campaigns/image01.jpg",
        likes: 3305
      },
      {
        title: 'Prop 62 - Death Penalty Abolish',
        image: "assets/campaigns/image02.jpg",
        likes: 370
      },
      {
        title: 'No on Prop 64',
        image: "assets/campaigns/image04.jpg",
        likes: 32
      },
      {
        title: 'Vote Yes on 62',
        image: "assets/campaigns/image05.jpg",
        likes: 817
      },
      {
        title: 'Dangers of Prop 62',
        image: "assets/campaigns/image06.jpg",
        likes: 4081
      },
      {
        title: 'Californians to Oppose 62',
        image: "assets/campaigns/image08.jpg",
        likes: 21
      },
      {
        title: 'Californians for 62',
        image: "assets/campaigns/image09.jpg",
        likes: 902
      },
      {
        title: 'No on Prop 62 (Archdiocese of LA)',
        image: "assets/campaigns/image10.jpg",
        likes: 77
      },
      {
        title: 'Vote Yes on Prop 62',
        image: "assets/campaigns/image11.jpg",
        likes: 2021
      },
      {
        title: 'No 62 (PORAC PIC)',
        image: "assets/campaigns/image12.jpg",
        likes: 11
      },
  ];

  constructor(public navCtrl: NavController, public issues: IssuesService) {
  }

  showDetail(campaign) {
    this.navCtrl.push(CampaignDetailPage, { campaign: campaign })
  }
}
