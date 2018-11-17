import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSavedItemListComponent } from './user-saved-item-list.component';

describe('UserSavedItemListComponent', () => {
  let component: UserSavedItemListComponent;
  let fixture: ComponentFixture<UserSavedItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSavedItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSavedItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
