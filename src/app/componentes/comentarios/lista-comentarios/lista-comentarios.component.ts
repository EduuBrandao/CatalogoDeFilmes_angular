import { Component, Input } from '@angular/core';
import { Comentario } from '../../interfaces/comentarios';
import { ComentarioServiceService } from '../comentario-service.service';

@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css']
})
export class ListaComentariosComponent {
  @Input() filmeId!: number;
  comentario: Comentario[] = [];

  constructor(private service: ComentarioServiceService) {}

  ngOnInit(): void {
    this.service.ListaComentarios().subscribe((comentarios) => {
      this.comentario = comentarios.filter(comentario => comentario.fk_id.toString() === this.filmeId.toString());
    });
  }
}
