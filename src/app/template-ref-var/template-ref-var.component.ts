import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-var',
  templateUrl: './template-ref-var.component.html',
  styleUrls: ['./template-ref-var.component.css']
})
export class TemplateRefVarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getValue(value:any) {
    console.log(value);
  }

  getAllProperties(all:any) {
    console.log(all);
  }

  getattr(myattr:any) {
    console.log("id=" + myattr.id);
    console.log("type=" + myattr.type);
    console.log("value=" + myattr.value);
  }
}
