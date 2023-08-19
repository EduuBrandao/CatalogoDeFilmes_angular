import { Component, Input } from '@angular/core';
import { ComentarioServiceService } from '../comentario-service.service';
import { Comentario } from '../../interfaces/comentarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-comentario',
  templateUrl: './criar-comentario.component.html',
  styleUrls: ['./criar-comentario.component.css']
})

export class CriarComentarioComponent {
  @Input() filmeId!: number;
  comentario: Comentario = {
    id: 0,
    fk_id: '',
    comentario: '',
    usuario: ''
  }

  constructor(private service: ComentarioServiceService,
             private router: Router,) {}

  criarComentario() {
    console.log("Usuario:", this.comentario.usuario);
  console.log("Comentário:", this.comentario.comentario);

    this.comentario.fk_id = this.filmeId.toString(); // Atribuir filmeId ao id do comentário
    this.service.CriarComentario(this.comentario).subscribe(() => {
      window.location.reload() })
  }

}
