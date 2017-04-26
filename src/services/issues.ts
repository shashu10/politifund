import { Injectable } from '@angular/core';

@Injectable()
export class IssuesService {

    public issuesGroup: any[] = [
        [
          { name: "Environment", selected: false },
          { name: "Civil Rights", selected: false },
        ], [
          { name: "Marijuana", selected: false },
          { name: "Immigration", selected: false },
        ], [
          { name: "Income Inequality", selected: false },
          { name: "Economy", selected: false },
        ], [
          { name: "Education", selected: false },
          { name: "Veterans ", selected: false },
        ], [
          { name: "Election Reform", selected: false },
          { name: "Death Penalty", selected: false },
        ], [
          { name: "Abortion", selected: false },
          { name: "Gun Policy", selected: false },
        ], [
          { name: "Human Rights", selected: false },
          { name: "Healthcare", selected: false },
        ], 
      ]
    constructor() {
    }

    get selectedIssues(): any[] {
        let selected = []
        this.issuesGroup.forEach((group) => {
            group.forEach((issue) => {
                if (issue.selected) selected.push(issue)
            })
        })
        return selected
    }

}
