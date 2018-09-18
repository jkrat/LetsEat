import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';
import { PostService } from '../post.service';
import { ActivatedRoute, Params } from '@angular/router';
import {Router} from "@angular/router";
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
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

export class DetailsComponent implements OnInit {

  private id: any;
  reviews: any;
  rest: object;
  private range: any;
  private date: any;
  private day: string;
  private month: any;
  private months: any;
  private total: number;

  constructor(private rs: ReviewService, private ps: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov' , 'Dec'];
    this.range = [1,2,3,4,5];
    this.reviews = [];
    this.route.params
    .subscribe((params: Params) => this.id = params.id);
    this.rs.allofRest(this.id, (data) => {
    this.reviews = data;
    this.total = 0
    for (let i in this.reviews) {
      this.total += this.reviews[i]['stars'];
      console.log(this.total);
      this.date = this.reviews[i]['created_at'];
      this.month = +this.date.slice(5,7);
      this.day = this.date.slice(8,10);
      this.reviews[i]['created_at'] = this.months[this.month] + " " + this.day;
    }
    });
    this.ps.findbyId(this.id, (data) => {
    this.rest = data[0];
    this.rest['rating'] = this.total / this.reviews.length;
    })

  }

  delete(rest) {
    this.ps.destroy(rest._id, (data)=> {
      this.router.navigate(['/restaurants']);
    });
  }
  

}
