import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchFaltasComponent } from './launch-faltas.component';

describe('LaunchFaltasComponent', () => {
  let component: LaunchFaltasComponent;
  let fixture: ComponentFixture<LaunchFaltasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchFaltasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchFaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
