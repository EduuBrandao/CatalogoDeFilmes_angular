import { Component} from '@angular/core';
import { Result } from '../interfaces/IListaFilmes';
import { TMDBService } from 'src/app/services/tmdb.service';
import { LikeDislikeService } from 'src/app/services/Like/LikeDislike.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
})
export class FilmesComponent {

  likeActive: boolean = false;
  dislikeActive: boolean = false;
  paginaSelecionada: number = 1;
  informacoesFilme: boolean[] = [];
  listaFilmes: Result[] = [];
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

  pesquisarFilmes() {
    this.filmesFiltrados = this.listaFilmes.filter((filme) =>
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
    const startPage = Math.max(1, middlePage - 4);
    const endPage = Math.min(startPage + 9, this.totalPaginas);

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }

  atualizarListadeFilmes(page: number) {
    this.tmdbService.buscarFilmes(page).subscribe((result) => {
      this.listaFilmes = result;
      this.filmesFiltrados = result;
    });
  }

  atualizarPaginaSelecionada() {
    if (this.paginaSelecionada >= 1 && this.paginaSelecionada <= 100) {
      this.atualizarListadeFilmes(this.paginaSelecionada);
    }
  }

  toggleLike(event: Event, filmId: number) {
    event.stopPropagation();
    const currentLikeActive = this.likeDislikeService.getLikeActive(filmId);
    this.likeDislikeService.setLikeActive(filmId, !currentLikeActive);
  }

  toggleDislike(event: Event, filmId: number) {
    event.stopPropagation();
    const currentDislikeActive = this.likeDislikeService.getDislikeActive(filmId);
    this.likeDislikeService.setDislikeActive(filmId, !currentDislikeActive);
  }
}
