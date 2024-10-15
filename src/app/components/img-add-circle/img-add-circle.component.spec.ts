import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAddCircleComponent } from './img-add-circle.component';

describe('ImgAddCircleComponent', () => {
  let component: ImgAddCircleComponent;
  let fixture: ComponentFixture<ImgAddCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgAddCircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgAddCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
