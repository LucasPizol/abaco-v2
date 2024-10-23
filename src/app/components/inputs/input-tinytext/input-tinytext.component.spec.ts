import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTinytextComponent } from './input-tinytext.component';

describe('InputTinytextComponent', () => {
  let component: InputTinytextComponent;
  let fixture: ComponentFixture<InputTinytextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTinytextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTinytextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
