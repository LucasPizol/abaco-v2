import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReorganizesMainComponent } from './reorganizes-main.component';

describe('ReorganizesMainComponent', () => {
  let component: ReorganizesMainComponent;
  let fixture: ComponentFixture<ReorganizesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReorganizesMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReorganizesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
