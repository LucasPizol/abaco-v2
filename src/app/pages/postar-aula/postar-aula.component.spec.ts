import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostarAulaComponent } from './postar-aula.component';

describe('PostarAulaComponent', () => {
  let component: PostarAulaComponent;
  let fixture: ComponentFixture<PostarAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostarAulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostarAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
