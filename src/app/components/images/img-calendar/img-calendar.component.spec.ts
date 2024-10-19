import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCalendarComponent } from './img-calendar.component';

describe('ImgCalendarComponent', () => {
  let component: ImgCalendarComponent;
  let fixture: ComponentFixture<ImgCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
