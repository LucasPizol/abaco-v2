import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopoutComponent } from './popout.component';

describe('PopoutComponent', () => {
  let component: PopoutComponent;
  let fixture: ComponentFixture<PopoutComponent>;
<<<<<<< HEAD
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PopoutComponent]
    })
      .compileComponents();
=======

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoutComponent ]
    })
    .compileComponents();

>>>>>>> d31fb55e6f2398ff951fac8a756b336afad13db0
    fixture = TestBed.createComponent(PopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
<<<<<<< HEAD
  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
=======

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> d31fb55e6f2398ff951fac8a756b336afad13db0
