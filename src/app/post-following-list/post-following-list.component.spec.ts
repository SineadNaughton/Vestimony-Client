import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFollowingListComponent } from './post-following-list.component';

describe('PostFollowingListComponent', () => {
  let component: PostFollowingListComponent;
  let fixture: ComponentFixture<PostFollowingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFollowingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFollowingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
