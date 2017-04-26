import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { IssuesPage } from '../issues/issues';

@Component({
  selector: 'page-stances',
  templateUrl: 'stances.html'
})
export class StancesPage {

  stances: Array<{question: string, yes: boolean, no: boolean}> = [

      { question: 'Government should do more to solve problems',                                                               yes: false, no: false },
      { question: 'More people of different races, ethnic groups and nationalities makes this country a better place to live', yes: false, no: false },
      { question: 'The constitution should be strictly interpreted and adhered to',                                            yes: false, no: false },
      { question: 'The economic system in this country is generally fair to most Americans',                                   yes: false, no: false },
      { question: 'In general, small government is better than big government',                                                yes: false, no: false },
  ];
  constructor(public navCtrl: NavController) {

  }

  toggleYes(stance) {
    stance.yes = !stance.yes
    if (stance.yes) stance.no = false
  }
  toggleNo(stance) {
    stance.no = !stance.no
    if (stance.no) stance.yes = false
  }

  next() {
    this.navCtrl.push(IssuesPage)
  }
}
