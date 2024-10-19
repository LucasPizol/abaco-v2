import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputShortComponent } from './input-short.component';

describe('InputShortComponent', () => {
  let component: InputShortComponent;
  let fixture: ComponentFixture<InputShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputShortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
