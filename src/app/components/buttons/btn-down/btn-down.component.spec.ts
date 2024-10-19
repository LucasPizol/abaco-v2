import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDownComponent } from './btn-down.component';

describe('BtnDownComponent', () => {
  let component: BtnDownComponent;
  let fixture: ComponentFixture<BtnDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnDownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
