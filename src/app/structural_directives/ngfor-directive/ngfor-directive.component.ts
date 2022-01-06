import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ngfor-directive',
  templateUrl: './ngfor-directive.component.html',
  styleUrls: ['./ngfor-directive.component.css']
})
export class NgforDirectiveComponent implements OnInit {

  public colors = ['red', 'green', 'blue', 'yellow'];
  
  // First method 
  @Input() public parentData: any;
  // Second method same variable
  @Input('parentData') public myname: any;
  // Third method custome variable
  // @Input('parentData') public name: any;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.childEvent.emit('I am from ngFor Component');
  }

  // fireEvent() {
  //   this.childEvent.emit('I am from ngFor Component');
  // }

}
