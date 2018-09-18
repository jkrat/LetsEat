import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReviewService } from '../review.service';
import { PostService } from '../post.service';
import {Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {

  @Output() emitter = new EventEmitter();

  private newReview: object;
  private err: any;
  private id: any;
  private rests: any;

  constructor(private rs: ReviewService, private ps: PostService, private router: Router, private location: Location) {
    this.init();
    this.errinit();
   }
  
  init() {
    this.newReview = {
      rest: 'choose...',
      customer: '',
      stars: 1,
      content: ''
    };

  }
  errinit() {
    this.err = [];
  }

  create() {
    this.id = this.newReview['rest'];
    this.rs.create(this.id, this.newReview, (data) => {
      if (data.error) {
        this.errinit();
        for (let key in data.error.errors) {
            this.err.push(data.error.errors[key]['message']); 
        }
        return;
      }
      console.log(data);
      this.goBack();
    })
  }

  goBack(): void {
    console.log(this.location);
    this.location.back();
  }

  ngOnInit() {
    this.rests = [];
    this.ps.all(data => {
      this.rests = data;
    });
  }

}
