import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEventDisplayComponent } from './home-event-display.component';

describe('HomeEventDisplayComponent', () => {
  let component: HomeEventDisplayComponent;
  let fixture: ComponentFixture<HomeEventDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEventDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEventDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
