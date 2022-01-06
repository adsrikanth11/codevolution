import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public name = 'srikanth';
  public siteurl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  greatuser() {
    return 'Hello ' + this.name;
  }
}
