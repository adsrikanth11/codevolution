import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routers',
  templateUrl: './routers.component.html',
  styleUrls: ['./routers.component.css']
})
export class RoutersComponent implements OnInit {

  id = '';
  productid = '';
  photoid = '';

  constructor(private activeroute: ActivatedRoute) {
    console.log(this.activeroute.snapshot.params);
    console.log(this.activeroute.snapshot.queryParams);
  }

  ngOnInit(): void {
    this.activeroute.params.subscribe(params => {
      this.id = params.id;
      this.productid = params.productid;
      this.photoid = params.photoid;
      // console.log(params);
    });

    this.activeroute.queryParams.subscribe(query => {
      // console.log(query);
    });

  }
}
