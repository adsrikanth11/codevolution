import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  public warning_class = "warning";
  public hasError = true;
  public isSpecial = true;
  public multiConditional = {
    "succes" : !this.hasError,
    "danger" : this.hasError,
    "info"   : this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

}
