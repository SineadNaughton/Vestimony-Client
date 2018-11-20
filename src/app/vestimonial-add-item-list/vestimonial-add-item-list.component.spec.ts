import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestimonialAddItemListComponent } from './vestimonial-add-item-list.component';

describe('VestimonialAddItemListComponent', () => {
  let component: VestimonialAddItemListComponent;
  let fixture: ComponentFixture<VestimonialAddItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestimonialAddItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestimonialAddItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
