import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestimonialLinkComponent } from './vestimonial-link.component';

describe('VestimonialLinkComponent', () => {
  let component: VestimonialLinkComponent;
  let fixture: ComponentFixture<VestimonialLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestimonialLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestimonialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
