import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRestComponent } from './new-rest.component';

describe('NewRestComponent', () => {
  let component: NewRestComponent;
  let fixture: ComponentFixture<NewRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
