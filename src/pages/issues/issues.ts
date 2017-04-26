import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { IssuesService } from '../../services/issues'

@Component({
  selector: 'page-issues',
  templateUrl: 'issues.html'
})
export class IssuesPage {

  issuesGroup: any[]
  get canGoNext(): boolean {
      let retval = false
      this.issuesGroup.forEach((i) => {
          i.forEach((si) => {
              if (si.selected) retval = true
          })
      })
      return retval
  }

  constructor(public navCtrl: NavController, public issues: IssuesService) {
    this.issuesGroup = issues.issuesGroup;
  }

  next() {
      this.navCtrl.push(TabsPage)
  }

  toggleDetails(issues) {
    if (issues.showDetails) {
        issues.showDetails = false;
    } else {
        issues.showDetails = true;
    }
  }

}
