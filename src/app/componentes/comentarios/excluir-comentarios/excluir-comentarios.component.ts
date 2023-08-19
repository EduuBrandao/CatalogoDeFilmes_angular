import { Component } from '@angular/core';
import { ComentarioServiceService } from '../comentario-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from '../../interfaces/comentarios';

@Component({
  selector: 'app-excluir-comentarios',
  templateUrl: './excluir-comentarios.component.html',
  styleUrls: ['./excluir-comentarios.component.css']
})
export class ExcluirComentariosComponent {

  comentarioId!: string;
  fk_number!: string;
  comentario: Comentario = {
    id: 0,
    fk_id: '',
    comentario: '',
    usuario: ''
  }

  constructor(
    private service: ComentarioServiceService,
    private router: Router,
    private route: ActivatedRoute,
    ){}



    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarComentarioPorId(parseInt(id!)).subscribe((comentario) => {
        this.comentario = comentario
        this.fk_number = comentario.fk_id;
      })
    }

    excluirComentario(fk_id: string) {
      console.log(this.comentario.id)
      if(this.comentario.id) {
        this.service.ExcluirComentario(this.comentario.id).subscribe(() => {
          this.router.navigate([`/descricao/${{fk_id}}`])
        })
      }

    }

    cancelar() {
      this.router.navigate(['/descricao/:id'])
    }
}
