import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSavedLikedComponent } from './user-saved-liked.component';

describe('UserSavedLikedComponent', () => {
  let component: UserSavedLikedComponent;
  let fixture: ComponentFixture<UserSavedLikedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSavedLikedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSavedLikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
