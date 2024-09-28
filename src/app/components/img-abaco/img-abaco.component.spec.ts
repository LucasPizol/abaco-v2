import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAbacoComponent } from './img-abaco.component';

describe('ImgAbacoComponent', () => {
  let component: ImgAbacoComponent;
  let fixture: ComponentFixture<ImgAbacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgAbacoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgAbacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
