import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestimonialTileComponent } from './vestimonial-tile.component';

describe('VestimonialTileComponent', () => {
  let component: VestimonialTileComponent;
  let fixture: ComponentFixture<VestimonialTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestimonialTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestimonialTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
