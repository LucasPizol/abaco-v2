import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPagePreviewComponent } from './img-page-preview.component';

describe('ImgPagePreviewComponent', () => {
  let component: ImgPagePreviewComponent;
  let fixture: ComponentFixture<ImgPagePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgPagePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgPagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
