import { Component} from '@angular/core';
import { Result } from '../../interfaces/IListaFilmes';
import { TMDBService } from 'src/app/services/TMDB/tmdb.service';
import { LikeDislikeService } from 'src/app/services/like/LikeDislike.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
})
export class FilmesComponent {

  paginaSelecionada: number = 1;
  informacoesFilme: boolean[] = [];
  tmdbImageUrlBase = 'https://image.tmdb.org/t/p/w500';
  totalPaginas: number = 100;
  pesquisa: string = '';
  filmesFiltrados: Result[] = [];

  constructor(
    private tmdbService: TMDBService,
    public likeDislikeService: LikeDislikeService
  ) {}

  ngOnInit(): void {
    this.atualizarListadeFilmes(this.paginaSelecionada);
  }

  atualizarListadeFilmes(page: number) {
    this.tmdbService.buscarFilmes(page).subscribe((result) => {
      this.filmesFiltrados = result;
    });
  }

  pesquisarFilmes() {
    this.filmesFiltrados = this.filmesFiltrados.filter((filme) =>
      filme.title.toLowerCase().includes(this.pesquisa.toLowerCase())
    );
  }

  diminuirNumeroPaginas() {
    if (this.paginaSelecionada > 1) {
      this.paginaSelecionada--;
      this.atualizarPaginaSelecionada();
    }
  }

  clicarNumeroPaginas(pageNumber: number) {
    this.paginaSelecionada = pageNumber;
    this.atualizarPaginaSelecionada();
  }

  aumentarNumerodePaginas() {
    if (this.paginaSelecionada < 100) {
      this.paginaSelecionada++;
      this.atualizarPaginaSelecionada();
    }
  }

  gerarIntervaloPaginas(): number[] {
    const middlePage = Math.min(this.paginaSelecionada, this.totalPaginas - 5);
    const startPage = Math.max(1, middlePage);
    const endPage = Math.min(startPage + 4, this.totalPaginas);

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }

  atualizarPaginaSelecionada() {
    if (this.paginaSelecionada >= 1 && this.paginaSelecionada <= 100) {
      this.atualizarListadeFilmes(this.paginaSelecionada);
    }
  }

  botaoLike(event: Event, filmId: number) {
    event.stopPropagation();
    const atualLikeAtivo = this.likeDislikeService.buscarLikeAtivo(filmId);
    const atualDeslikeAtivo = this.likeDislikeService.buscarDeslikeAtivo(filmId);

    if (!atualLikeAtivo && !atualDeslikeAtivo) {
      this.likeDislikeService.ativarLike(filmId, true);
    } else if (atualLikeAtivo && !atualDeslikeAtivo) {
      this.likeDislikeService.ativarLike(filmId, false);
    } else if (!atualLikeAtivo && atualDeslikeAtivo) {
      this.likeDislikeService.ativarLike(filmId, true);
      this.likeDislikeService.ativarDeslike(filmId, false);
    }
  }

  botaoDislike(event: Event, filmId: number) {
    event.stopPropagation();
    const atualLikeAtivo = this.likeDislikeService.buscarLikeAtivo(filmId);
    const atualDeslikeAtivo = this.likeDislikeService.buscarDeslikeAtivo(filmId);

    if (!atualLikeAtivo && !atualDeslikeAtivo) {
      this.likeDislikeService.ativarDeslike(filmId, true);
    } else if (!atualLikeAtivo && atualDeslikeAtivo) {
      this.likeDislikeService.ativarDeslike(filmId, false);
    } else if (atualLikeAtivo && !atualDeslikeAtivo) {
      this.likeDislikeService.ativarDeslike(filmId, true);
      this.likeDislikeService.ativarLike(filmId, false);
    }
  }
}
