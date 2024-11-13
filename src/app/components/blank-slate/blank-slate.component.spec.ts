import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankSlateComponent } from './blank-slate.component';

describe('BlankSlateComponent', () => {
  let component: BlankSlateComponent;
  let fixture: ComponentFixture<BlankSlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlankSlateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlankSlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
