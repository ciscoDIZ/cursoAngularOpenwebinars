import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsReceivedsComponent } from './mails-receiveds.component';

describe('MailsReceivedsComponent', () => {
  let component: MailsReceivedsComponent;
  let fixture: ComponentFixture<MailsReceivedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailsReceivedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailsReceivedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
