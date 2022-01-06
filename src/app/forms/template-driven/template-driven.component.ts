import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  username: string = '';
  emailid: string = '';
  password: string = '';
  // gender: boolean = true;
  // cities: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  add(formvalue: NgForm) {
    console.log(formvalue.value);
    console.log(formvalue);
  }

  resetform(templateform: NgForm) {
    templateform.reset();
  }

  setvalue(templateform: NgForm) {
    let userdetail = {
      username: 'Srikanth',
      emailid: 'srikanth@gmail.com',
      password: 'mypassword'
    }
    templateform.setValue(userdetail);
  }

}
