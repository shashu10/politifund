import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { StancesPage } from '../pages/stances/stances';
import { IssuesPage } from '../pages/issues/issues';
import { CampaignsPage } from '../pages/campaigns/campaigns';
import { OrientationPage } from '../pages/orientation/orientation';
import { DonateModal } from '../pages/donate-modal/donate-modal';
import { CampaignDetailPage } from '../pages/campaign-detail/campaign-detail';
import { TabsPage } from '../pages/tabs/tabs';
import { IssuesService } from '../services/issues';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ProfilePage,
    HomePage,
    IssuesPage,
    StancesPage,
    CampaignsPage,
    OrientationPage,
    CampaignDetailPage,
    LoginPage,
    DonateModal,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ProfilePage,
    HomePage,
    IssuesPage,
    StancesPage,
    CampaignsPage,
    OrientationPage,
    CampaignDetailPage,
    LoginPage,
    DonateModal,
    TabsPage
  ],
  providers: [
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  IssuesService
  ]
})
export class AppModule {}
