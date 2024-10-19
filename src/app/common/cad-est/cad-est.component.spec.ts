import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadAlunosComponent } from './cad-est.component';

describe('CadAlunosComponent', () => {
  let component: CadAlunosComponent;
  let fixture: ComponentFixture<CadAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadAlunosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
