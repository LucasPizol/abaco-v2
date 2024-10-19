import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgEditComponent } from './img-edit.component';

describe('ImgEditComponent', () => {
  let component: ImgEditComponent;
  let fixture: ComponentFixture<ImgEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
