import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoBlockComponent } from './item-info-block.component';

describe('ItemInfoBlockComponent', () => {
  let component: ItemInfoBlockComponent;
  let fixture: ComponentFixture<ItemInfoBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInfoBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
