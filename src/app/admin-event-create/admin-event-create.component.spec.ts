import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventCreateComponent } from './admin-event-create.component';

describe('AdminEventCreateComponent', () => {
  let component: AdminEventCreateComponent;
  let fixture: ComponentFixture<AdminEventCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEventCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
