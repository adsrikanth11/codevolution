import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public switch = false;
  public inlineevent = "";

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent() {
    alert("I am Click Event");
    console.log('Hello World');
  }

  clearConsole() {
    console.clear();
  }

  getEvent(event:any) {
    console.log(event.type);
  }

  bulb() {
    if(this.switch === true) {
      this.switch = false;
    } else {
      this.switch = true;
    }
  }

  On() {
    this.switch = true;
    console.log('ON');
  }

  Off() {
    this.switch = false;
    console.log('OFF');
  }

}
