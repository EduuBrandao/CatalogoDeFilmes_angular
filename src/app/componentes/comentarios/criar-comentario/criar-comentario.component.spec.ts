import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarComentarioComponent } from './criar-comentario.component';

describe('CriarComentarioComponent', () => {
  let component: CriarComentarioComponent;
  let fixture: ComponentFixture<CriarComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarComentarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
