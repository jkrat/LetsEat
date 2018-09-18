import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-rest',
  templateUrl: './edit-rest.component.html',
  styleUrls: ['./edit-rest.component.css']
})
export class EditRestComponent implements OnInit {
  @Input() restd;
  @Output() emitter = new EventEmitter();

  private id: any;
  private rest: Object;
  private err: String[];

  constructor(private ps: PostService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) => this.id = params.id);
    console.log('/api/posts/' + this.id);
    this.ps.findbyId(this.id, (data) => {
      this.rest = data[0];
    });
  }

  update() {
    this.ps.update(this.rest, (data) => {
      this.err = [];
      if (data.error) {
        for (let key in data.error.errors) {
            this.err.push(data.error.errors[key]['message']);
        }
        return;
      }
      this.rest = data;
      this.goBack();
    });
  }

  goBack(): void {
    console.log(this.location);
    this.location.back();
  }
}
