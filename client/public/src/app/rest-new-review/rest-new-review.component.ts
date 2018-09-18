import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReviewService } from '../review.service';
import { PostService } from '../post.service';
import { ActivatedRoute, Params } from '@angular/router';
import {Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-review',
  templateUrl: './rest-new-review.component.html',
  styleUrls: ['./rest-new-review.component.css']
})
export class RestNewReviewComponent implements OnInit {

  @Output() emitter = new EventEmitter();
  newReview: object;
  private err: any;
  private id: string;
  rest: object;

  constructor(private rs: ReviewService, private route: ActivatedRoute, private ps: PostService, private router: Router, private location: Location) {
    this.init();
    this.getrest();
   }
   
  init() {
    this.newReview = {
      customer: ' ',
      stars: 1,
      content: ' '
    };
    this.err = [];
  }

  create() {
    this.route.params
    .subscribe((params: Params) => this.id = params.id);
    this.rs.create(this.id ,this.newReview, (data) => {
      if (data.error) {
        this.init();
        for (let key in data.error.errors) {
            this.err.push(data.error.errors[key]['message']);
        }
        return;
      }
      // this.emitter.emit(data);
      this.goBack();
      
    })
  }

  getrest() {
    this.route.params
    .subscribe((params: Params) => this.id = params.id);
    this.ps.findbyId(this.id, (data) => {
      if (data.error) {
        console.log("error");
        return;
      }
      this.rest = data;
      console.log("found rest: ", this.rest);
      return;
      });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
