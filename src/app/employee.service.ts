import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './http-services/employee';

interface myposts {
  id: number,
  name: string,
  email: string,
  title: string,
  body: string,
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private getallemp: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  getemployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.getallemp);
    // return [
    //   { "id": 1, "name": "Srikanth", "city": "Adoni" },
    //   { "id": 1, "name": "Amarnath", "city": "Adoni" },
    //   { "id": 1, "name": "Shivaraj", "city": "Bangalore" },
    //   { "id": 1, "name": "Uday", "city": "Hyderabad" },
    //   { "id": 1, "name": "Kishore", "city": "Adoni" },
    //   { "id": 1, "name": "Pranay", "city": "Chennai" },
    //   { "id": 1, "name": "Vamshi", "city": "Mumbai" },
    // ];
  }

  private myheaders = new HttpHeaders({
    'content-type': 'aplication/json',
    'Token': 'Bearer abcdeghijklmnop'
  });

  private myparams = new HttpHeaders()
  .set('pageNum', '5')
  .set('pageSize', '100');


  // Get All Posts
  getPosts(): Observable<myposts> {
    return this.http.get<myposts>('https://jsonplaceholder.typicode.com/posts', {headers: this.myheaders});
  }

  // Get Single Post
  getSinglePost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }

  // Get commented posts
  getCommentPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  }

  // Add/Create Post
  addPost(mybody: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', mybody);
  }

  // Put/Update Post
  updatePost(myput: any) {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/1', myput);
  }

  // Delete Post
  deletePost(myid: any) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+myid);
  }
}
