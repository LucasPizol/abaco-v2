import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEstComponent } from './cad-est.component';

describe('CadEstComponent', () => {
  let component: CadEstComponent;
  let fixture: ComponentFixture<CadEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadEstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
