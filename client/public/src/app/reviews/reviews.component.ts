import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
              stagger('50ms',
                animate('550ms ease-out',
                  style({ opacity: 1, transform: 'translateY(0px)' })))
          ],{ optional: true }),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class ReviewsComponent implements OnInit {

  private reviews: any;
  private range: any;
  private date: any;
  private day: string;
  private month: any;
  private months: any;
  private rest: any;

  constructor(private rs: ReviewService) { }

  ngOnInit() {
    this.months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov' , 'Dec'];
    this.range = [1,2,3,4,5];
    this.reviews = [];
    this.rs.all(data => {
      this.reviews = data;
      for (let i in this.reviews) {
        this.date = this.reviews[i]['created_at'];
        this.month = +this.date.slice(5,7);
        this.day = this.date.slice(8,10);
        this.reviews[i]['created_at'] = this.months[this.month] + " " + this.day;
      }
    })
  }

  // delete(rest) {
  //   this.post.destroy(rest._id, (data)=> {
  //     for (var i = 0; i < this.rests.length; i++) {
  //       if (data._id == this.rests[i]._id) {
  //        console.log("found it", i);
  //        console.log(this.rests);
  //        this.rests.splice(i, 1);
  //        console.log(this.rests);
  //       }
  //     }
  //     return;
  //   });
  // }

  // goToRest(rest) {
  //   this.router.navigate(['/restaurants/rest']);
    // this.reviews.push(review);
  // }
}