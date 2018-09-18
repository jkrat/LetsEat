import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from '../post.service';
import {Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-rest',
  templateUrl: './new-rest.component.html',
  styleUrls: ['./new-rest.component.css']
})
export class NewRestComponent implements OnInit {

  @Output() emitter = new EventEmitter();

  private newRest: object;
  err: any;
  private message: any;

  constructor(private ps: PostService, private router: Router, private location: Location) {
    this.newRest = {
      name: '',
      cuisine: '',
    };
    this.init();
   }
  
  init() {
    this.err = [];
  }

  // create() {
  //   this.ps.create(this.newRest, (data) => { 
  //     if (data.ert) {
  //       this.init();
  //       this.err.push(data.ert);
  //       return;
  //     }
  //     if (data.error) {
  //       this.init();
  //       for (let key in data.error.errors) {
  //           // console.log(key);
  //           // console.log(data.error.errors[key]['message']);
  //           this.err.push(data.error.errors[key]['message']);
  //       }
  //       // console.log("error will say: ", this.err)
  //       return;
  //     }
  //     console.log("ok");
  //     // this.emitter.emit(data);
  //     this.router.navigate(['/restaurants']);
      
  //   })
  // }

  goBack(): void {
    this.location.back();
  }

  create() {
    this.ps.create(this.newRest, (data) => {
      console.log("recieved data:", data);
      this.init();
      if (data.error) {
        console.log("a");
          for (let key in data.error.errors) {
            this.err.push(data.error.errors[key]['message']);
          }
          return;
        } else if (data.ert) {    
          console.log("b");
          this.err.push(data.ert);
          return;  
        } else {
          console.log("ok");
          // this.emitter.emit(data);
          // this.goBack();
          this.router.navigate(['/restaurants']);
          return;
        }
    });
  }

  ngOnInit() {
  }

}
