import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  all(cb){
    this.http.get('/api/reviews/')
    .subscribe(data => cb(data));
  }

  allofRest(restid, cb){
    this.http.get('/api/reviews/'+ restid)
    .subscribe(data => cb(data));
  }

  create(restid, review, cb){
    this.http.post("/api/reviews/"+ restid, review)
    .subscribe(data => cb(data));
  }

  update(review, cb){
    this.http.patch("/api/reviews/" + review._id, review)
    .subscribe(data => cb(data));
  }

  destroy(review, cb){
    this.http.delete("/api/reviews/" + review._id)
    .subscribe(data => cb(data));
  }
}
