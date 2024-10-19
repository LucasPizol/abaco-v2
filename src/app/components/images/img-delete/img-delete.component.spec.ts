import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgDeleteComponent } from './img-delete.component';

describe('ImgDeleteComponent', () => {
  let component: ImgDeleteComponent;
  let fixture: ComponentFixture<ImgDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
