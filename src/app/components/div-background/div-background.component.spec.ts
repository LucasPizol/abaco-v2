import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivBackgroundComponent } from './div-background.component';

describe('DivBackgroundComponent', () => {
  let component: DivBackgroundComponent;
  let fixture: ComponentFixture<DivBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
