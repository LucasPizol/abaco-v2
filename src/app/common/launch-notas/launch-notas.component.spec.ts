import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchNotasComponent } from './launch-notas.component';

describe('LaunchNotasComponent', () => {
  let component: LaunchNotasComponent;
  let fixture: ComponentFixture<LaunchNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchNotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
