import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestsComponent } from './rests.component';

describe('RestsComponent', () => {
  let component: RestsComponent;
  let fixture: ComponentFixture<RestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
