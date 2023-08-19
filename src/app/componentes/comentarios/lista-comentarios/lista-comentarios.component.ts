import { Component, Input, ViewChild } from '@angular/core';
import { Comentario } from '../../interfaces/comentarios';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComentarioService } from 'src/app/services/comentario.service';
import { LoadingComponent } from '../../loading/loading.component';

@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css'],
})
export class ListaComentariosComponent {
  @Input() filmeId!: number;
  @ViewChild('modalEdicao') modalEdicao: any;
  comentariosVisiveis = false;
  comentariosExibidos = 5;
  comentario: Comentario[] = [];
  commentParaEditar: any;
  comentarioParaExcluir: any;
  constructor(
    private service: ComentarioService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.service.listarComentarios().subscribe((comentarios) => {
      this.comentario = comentarios.filter(
        (comentario) => comentario.fk_id.toString() === this.filmeId.toString()
      );
    });
  }

  salvarEdicao() {
    const loadingModal = this.modalService.open(LoadingComponent, {
      backdrop: 'static',
      keyboard: false,
    });
    this.service.editarComentario(this.commentParaEditar).subscribe(() => {
      setTimeout(() => {
        loadingModal.close();
        window.location.reload();
      }, 800);
    });
  }

  excluirComentario(comentarioId: number, fk_id: string) {
    const loadingModal = this.modalService.open(LoadingComponent, {
      backdrop: 'static',
      keyboard: false,
    });

    console.log(comentarioId);
    this.service.excluirComentario(comentarioId).subscribe(() => {
      setTimeout(() => {
        loadingModal.close();
        window.location.reload();
      }, 800);
    });
  }

  abrirModalEditar(commentId: number) {
    this.commentParaEditar = this.comentario.find(
      (comment) => comment.id === commentId
    );
    this.modalService.open(this.modalEdicao, { centered: true });
  }

  abrirModalExclusao(content: any, comentario: Comentario) {
    const modalRef = this.modalService.open(content, { centered: true });
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.classList.add('modal-backdrop-custom-zindex');
    }

    this.comentarioParaExcluir = comentario;
  }

  carregarMaisComentarios() {
    this.comentariosExibidos += 5;
  }

  visualizarComentarios() {
    this.comentariosVisiveis = !this.comentariosVisiveis;
  }

}
