import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestimonialAddComponent } from './vestimonial-add.component';

describe('VestimonialAddComponent', () => {
  let component: VestimonialAddComponent;
  let fixture: ComponentFixture<VestimonialAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestimonialAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestimonialAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
