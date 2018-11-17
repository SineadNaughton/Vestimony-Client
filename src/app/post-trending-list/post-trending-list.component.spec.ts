import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTrendingListComponent } from './post-trending-list.component';

describe('PostTrendingListComponent', () => {
  let component: PostTrendingListComponent;
  let fixture: ComponentFixture<PostTrendingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTrendingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTrendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
