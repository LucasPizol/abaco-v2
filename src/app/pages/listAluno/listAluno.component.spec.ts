import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlunoComponent } from './listAluno.component';

describe('ListAlunoComponent', () => {
  let component: ListAlunoComponent;
  let fixture: ComponentFixture<ListAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
