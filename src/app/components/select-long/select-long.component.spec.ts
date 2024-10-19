import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLongComponent } from './select-long.component';

describe('SelectLongComponent', () => {
  let component: SelectLongComponent;
  let fixture: ComponentFixture<SelectLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectLongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
