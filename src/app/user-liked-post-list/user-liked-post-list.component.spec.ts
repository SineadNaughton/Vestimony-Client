import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLikedPostListComponent } from './user-liked-post-list.component';

describe('UserLikedPostListComponent', () => {
  let component: UserLikedPostListComponent;
  let fixture: ComponentFixture<UserLikedPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLikedPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLikedPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
