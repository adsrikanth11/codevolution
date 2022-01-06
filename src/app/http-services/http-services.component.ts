import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-http-services',
  templateUrl: './http-services.component.html',
  styleUrls: ['./http-services.component.css']
})
export class HttpServicesComponent implements OnInit {

  public employeess = [];
  public posts: any = [];
  public singlepost: any = [];
  public commentedposts: any = [];

  constructor( private http: EmployeeService) { }

  ngOnInit(): void {
    this.http.getemployees().subscribe(data => {
      console.log(data);
    },
    err => {
      console.log(err);
    });

    // Get All Posts
    this.http.getPosts().subscribe(data => {
      console.log(data)
      this.posts = data;
    },
    err => {
      console.log(err);
    });

    // Get Single Post
    this.http.getSinglePost().subscribe(data => {
      this.singlepost = data;
    },
    err => {
      console.log(err);
    });

    // Get commented posts
    this.http.getCommentPost().subscribe(data => {
      this.commentedposts = data;
    },
    err => {
      console.log(err);
    });   

  }

  // Add Post
  add_post() {
    const mybody = {
      title: 'My title',
      body: 'Hello this is my description'
    };

    this.http.addPost(mybody).subscribe(data => {
      console.log(data);
    },
    err => {
      console.log(err);
    });
  }

  // Put/Update Post
  update_post() {
    const updatebody = {
      title: 'My updated title',
      body: 'Hello this is my updated description'
    };

    this.http.updatePost(updatebody).subscribe(data => {
      console.log(data);
    },
    err => {
      console.log(err);
      console.log('Message: ' + err.message + 'Status: ' + err.status + ' StatusText: ' + err.statusText);
    });
  }

  // Delete Post
  delete_post(myid: any) {
    this.http.deletePost(myid).subscribe(data => {
      console.log('Deleted Successfully ' + data);
    },
    err => {
      console.log(err);
    });
  }
}

