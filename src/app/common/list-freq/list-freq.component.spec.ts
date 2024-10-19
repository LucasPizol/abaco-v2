import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFreqComponent } from './list-freq.component';

describe('ListFreqComponent', () => {
  let component: ListFreqComponent;
  let fixture: ComponentFixture<ListFreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFreqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
