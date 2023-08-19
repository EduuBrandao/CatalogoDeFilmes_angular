import { Component, Input, ViewChild } from '@angular/core';
import { Comentario } from '../../interfaces/comentarios';
import { ComentarioServiceService } from '../comentario-service.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css']
})
export class ListaComentariosComponent {
  @Input() filmeId!: number;
  @ViewChild('modalEdicao') modalEdicao: any;
  comentario: Comentario[] = [];
  commentParaEditar: any;
  comentarioParaExcluir: any;
  constructor(private service: ComentarioServiceService,
              private router: Router,
              private modalService: NgbModal) {}

  ngOnInit(): void {
    this.service.ListaComentarios().subscribe((comentarios) => {
      this.comentario = comentarios.filter(comentario => comentario.fk_id.toString() === this.filmeId.toString());
    });
  }

  abrirModalEditar(commentId: number) {
    // Encontre o comentário que está sendo editado com base no ID
    this.commentParaEditar = this.comentario.find(comment => comment.id === commentId);

    // Abra o modal de edição
    this.modalService.open(this.modalEdicao, { centered: true });
  }

  salvarEdicao() {
    // Implemente a lógica para salvar as alterações do comentário
    // Por exemplo, atualizar o comentário no servidor ou na lista de comentários
  }

  abrirModalExclusao(content: any, comentario : Comentario) {
    // Define o backdrop personalizado quando o modal é aberto
    const modalRef = this.modalService.open(content, { centered: true });
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.classList.add('modal-backdrop-custom-zindex');
    }

    this.comentarioParaExcluir = comentario;
  }

  comentariosVisiveis = false;
  comentariosExibidos = 5;

  toggleComments() {
    this.comentariosVisiveis = !this.comentariosVisiveis;
  }

  carregarMaisComentarios() {
    this.comentariosExibidos += 5;
  }

  editarComentario(comentarioId: number){

  }
  excluirComentario(comentarioId: number,fk_id: string) {
    console.log(comentarioId)
      this.service.ExcluirComentario(comentarioId).subscribe(() => {
        window.location.reload()
      })
}
}
