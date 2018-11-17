import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostForItemListComponent } from './post-for-item-list.component';

describe('PostForItemListComponent', () => {
  let component: PostForItemListComponent;
  let fixture: ComponentFixture<PostForItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostForItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostForItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
