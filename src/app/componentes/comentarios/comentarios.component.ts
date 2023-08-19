import { Comentario } from './../interfaces/comentarios';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {

  @Input() Comentario: Comentario = {
    id: 0,
    fk_id: '',
    comentario: "",
    usuario: "Edu"
  }


}
