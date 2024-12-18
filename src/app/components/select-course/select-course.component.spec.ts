import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCourseComponent } from './select-course.component';

describe('SelectCourseComponent', () => {
  let component: SelectCourseComponent;
  let fixture: ComponentFixture<SelectCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
