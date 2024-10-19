import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReorganizeInputComponent } from './reorganize-input.component';

describe('ReorganizeInputComponent', () => {
  let component: ReorganizeInputComponent;
  let fixture: ComponentFixture<ReorganizeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReorganizeInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReorganizeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
