import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostarAulasComponent } from './postar-aulas.component';

describe('PostarAulasComponent', () => {
  let component: PostarAulasComponent;
  let fixture: ComponentFixture<PostarAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostarAulasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostarAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
