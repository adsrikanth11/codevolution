import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public strmsg = "Welcome to Codevolution";
  public jsobj = {
    fname: "Ambal Dhage",
    lname: "Srikanth",
    city: "Adoni"
  };
  public mynumber = 5.678;
  public mycuurency = 0.25;
  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
