import { Component, Input } from '@angular/core';
import { Comentario } from '../../../interfaces/IComentarios';
import { LoadingComponent } from '../../loading/loading.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComentarioService } from 'src/app/services/comentario/comentario.service';

@Component({
  selector: 'app-criar-comentario',
  templateUrl: './criar-comentario.component.html',
  styleUrls: ['./criar-comentario.component.css'],
})
export class CriarComentarioComponent {

  @Input() filmeId!: number;
  comentario: Comentario = {
    id: 0,
    fk_id: '',
    comentario: '',
    usuario: '',
  };

  constructor(
    private service: ComentarioService,
    private modalService: NgbModal
  ) {}

  criarComentario() {
    const loadingModal = this.modalService.open(LoadingComponent, {
      backdrop: 'static',
      keyboard: false,
    });

    this.comentario.fk_id = this.filmeId.toString(); // Atribuir filmeId ao id do comentário
    this.service.criarComentario(this.comentario).subscribe(() => {
      setTimeout(() => {
        loadingModal.close();
        window.location.reload();
      }, 800);
    });
  }
}
