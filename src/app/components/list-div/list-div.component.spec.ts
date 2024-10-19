import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDivComponent } from './list-div.component';

describe('ListDivComponent', () => {
  let component: ListDivComponent;
  let fixture: ComponentFixture<ListDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
