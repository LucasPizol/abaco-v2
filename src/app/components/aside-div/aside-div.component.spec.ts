import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideDivComponent } from './aside-div.component';

describe('AsideDivComponent', () => {
  let component: AsideDivComponent;
  let fixture: ComponentFixture<AsideDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideDivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
