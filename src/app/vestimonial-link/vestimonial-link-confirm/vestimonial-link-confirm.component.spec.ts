import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestimonialLinkConfirmComponent } from './vestimonial-link-confirm.component';

describe('VestimonialLinkConfirmComponent', () => {
  let component: VestimonialLinkConfirmComponent;
  let fixture: ComponentFixture<VestimonialLinkConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestimonialLinkConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestimonialLinkConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
