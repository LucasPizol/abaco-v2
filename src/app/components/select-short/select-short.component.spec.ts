import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectShortComponent } from './select-short.component';

describe('SelectShortComponent', () => {
  let component: SelectShortComponent;
  let fixture: ComponentFixture<SelectShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectShortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
