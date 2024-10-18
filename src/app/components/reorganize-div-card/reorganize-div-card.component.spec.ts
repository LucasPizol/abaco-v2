import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReorganizeDivCardComponent } from './reorganize-div-card.component';

describe('ReorganizeDivCardComponent', () => {
  let component: ReorganizeDivCardComponent;
  let fixture: ComponentFixture<ReorganizeDivCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReorganizeDivCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReorganizeDivCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
