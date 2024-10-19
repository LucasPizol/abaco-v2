import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEstudanteComponent } from './listEstudante.component';

describe('ListEstudanteComponent', () => {
  let component: ListEstudanteComponent;
  let fixture: ComponentFixture<ListEstudanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEstudanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
