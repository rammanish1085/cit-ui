import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNotificationComponent } from './request-notification.component';

describe('RequestNotificationComponent', () => {
  let component: RequestNotificationComponent;
  let fixture: ComponentFixture<RequestNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
