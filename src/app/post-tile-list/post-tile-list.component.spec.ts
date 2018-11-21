import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTileListComponent } from './post-tile-list.component';

describe('PostTileListComponent', () => {
  let component: PostTileListComponent;
  let fixture: ComponentFixture<PostTileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
