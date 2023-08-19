import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirComentariosComponent } from './excluir-comentarios.component';

describe('ExcluirComentariosComponent', () => {
  let component: ExcluirComentariosComponent;
  let fixture: ComponentFixture<ExcluirComentariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirComentariosComponent]
    });
    fixture = TestBed.createComponent(ExcluirComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
