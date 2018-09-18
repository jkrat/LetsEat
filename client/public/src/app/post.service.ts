import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  all(cb){
    this.http.get('/api/rests')
    .subscribe(data => cb(data));
  }

  findbyId(rest, cb){
    this.http.get('/api/rests/' + rest)
    .subscribe(data => cb(data));
  }

  create(rest, cb){
    this.http.post("/api/rests", rest)
    .subscribe(data => cb(data));
  }

  update(rest, cb){
    this.http.patch("/api/rests/" + rest._id, rest)
    .subscribe(data => cb(data));
  }

  destroy(rest, cb){
    this.http.delete("/api/rests/" + rest)
    .subscribe(data => cb(data));
  }
}
