import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTileListComponent } from './item-tile-list.component';

describe('ItemTileListComponent', () => {
  let component: ItemTileListComponent;
  let fixture: ComponentFixture<ItemTileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
