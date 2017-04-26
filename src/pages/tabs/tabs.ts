import { Component } from '@angular/core';

import { CampaignsPage } from '../campaigns/campaigns';
import { IssuesPage } from '../issues/issues';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CampaignsPage;
  tab2Root: any = IssuesPage;
  tab3Root: any = ProfilePage;

  constructor() {

  }
}
