import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReorganizesDivComponent } from './reorganizes-div.component';

describe('ReorganizesDivComponent', () => {
  let component: ReorganizesDivComponent;
  let fixture: ComponentFixture<ReorganizesDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReorganizesDivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReorganizesDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
