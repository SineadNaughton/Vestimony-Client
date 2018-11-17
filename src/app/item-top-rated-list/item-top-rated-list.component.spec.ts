import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTopRatedListComponent } from './item-top-rated-list.component';

describe('ItemTopRatedListComponent', () => {
  let component: ItemTopRatedListComponent;
  let fixture: ComponentFixture<ItemTopRatedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTopRatedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTopRatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
