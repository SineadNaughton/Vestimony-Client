import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostForProfileListComponent } from './post-for-profile-list.component';

describe('PostForProfileListComponent', () => {
  let component: PostForProfileListComponent;
  let fixture: ComponentFixture<PostForProfileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostForProfileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostForProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
