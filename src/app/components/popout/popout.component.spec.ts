import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopoutComponent } from './popout.component';

describe('PopoutComponent', () => {
  let component: PopoutComponent;
  let fixture: ComponentFixture<PopoutComponent>;
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PopoutComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(PopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});