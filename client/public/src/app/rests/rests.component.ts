import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-rests',
  templateUrl: './rests.component.html',
  styleUrls: ['./rests.component.css'],
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
export class RestsComponent implements OnInit {

  private rests: any;
  private range: any;

  constructor(private post: PostService) { }

  ngOnInit() {
    this.range = [1,2,3,4,5];
    this.rests = [];
    this.post.all(data => {
      this.rests = data;
      for (let i = 0; i < this.rests.length; i++) {
        let total = 0;
        for (var j = 0; j < this.rests[i]['reviews'].length; j++) {
          total += this.rests[i]['reviews'][j]['stars']
        }
        let avg = total / j;
        this.rests[i]['rating'] = avg;
      }
    })
  }

  delete(rest) {
    this.post.destroy(rest._id, (data)=> {
      for (var i = 0; i < this.rests.length; i++) {
        if (data._id == this.rests[i]._id) {
         console.log("found it", i);
         console.log(this.rests);
         this.rests.splice(i, 1);
         console.log(this.rests);
        }
      }
      return;
    });
  }

}