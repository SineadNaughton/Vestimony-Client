import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestimonialAddReviewComponent } from './vestimonial-add-review.component';

describe('VestimonialAddReviewComponent', () => {
  let component: VestimonialAddReviewComponent;
  let fixture: ComponentFixture<VestimonialAddReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestimonialAddReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestimonialAddReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
