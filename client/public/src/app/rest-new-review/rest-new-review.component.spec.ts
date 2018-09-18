import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestNewReviewComponent } from './rest-new-review.component';

describe('RestNewReviewComponent', () => {
  let component: RestNewReviewComponent;
  let fixture: ComponentFixture<RestNewReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestNewReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestNewReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
