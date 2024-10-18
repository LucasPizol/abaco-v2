import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBgComponent } from './list-bg.component';

describe('ListDivComponent', () => {
  let component: ListBgComponent;
  let fixture: ComponentFixture<ListBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
