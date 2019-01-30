import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventAttendanceComponent } from './admin-event-attendance.component';

describe('AdminEventAttendanceComponent', () => {
  let component: AdminEventAttendanceComponent;
  let fixture: ComponentFixture<AdminEventAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEventAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
