import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEndComponent } from './cad-end.component';

describe('CadEndComponent', () => {
  let component: CadEndComponent;
  let fixture: ComponentFixture<CadEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadEndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
