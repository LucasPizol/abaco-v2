import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgArrowDownComponent } from './img-arrow-down.component';

describe('ImgArrowDownComponent', () => {
  let component: ImgArrowDownComponent;
  let fixture: ComponentFixture<ImgArrowDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgArrowDownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgArrowDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
