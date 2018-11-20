import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAddVestimonialListComponent } from './item-add-vestimonial-list.component';

describe('VestimonialAddItemListComponent', () => {
  let component: ItemAddVestimonialListComponent;
  let fixture: ComponentFixture<ItemAddVestimonialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAddVestimonialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAddVestimonialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
