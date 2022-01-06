import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  templateUrl: './ng-if-directive.component.html',
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent implements OnInit {

  public isDisplay = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle_ifelse() {
    (this.isDisplay === true) ? this.isDisplay = false : this.isDisplay = true 
  }

}
