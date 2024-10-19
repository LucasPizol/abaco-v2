import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgNoteAddComponent } from './img-note-add.component';

describe('ImgNoteAddComponent', () => {
  let component: ImgNoteAddComponent;
  let fixture: ComponentFixture<ImgNoteAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgNoteAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgNoteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
