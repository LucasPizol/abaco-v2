import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLongComponent } from './input-long.component';

describe('InputLongComponent', () => {
  let component: InputLongComponent;
  let fixture: ComponentFixture<InputLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputLongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
