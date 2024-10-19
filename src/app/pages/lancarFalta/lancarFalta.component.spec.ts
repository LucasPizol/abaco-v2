import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancarFaltaComponent } from './lancarFalta.component';

describe('LancarFaltaComponent', () => {
  let component: LancarFaltaComponent;
  let fixture: ComponentFixture<LancarFaltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LancarFaltaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LancarFaltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
