import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFrequenciaComponent } from './listFrequencia.component';

describe('ListFrequenciaComponent', () => {
  let component: ListFrequenciaComponent;
  let fixture: ComponentFixture<ListFrequenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFrequenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFrequenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
