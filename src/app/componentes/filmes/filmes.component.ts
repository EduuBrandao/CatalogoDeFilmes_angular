import { Component} from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';
import { Result } from '../interfaces/IListaFilmes';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
})
export class FilmesComponent {

  paginaSelecionada: number = 1;
  informacoesFilme: boolean[] = [];
  listaFilmes: Result[] = [];
  tmdbImageUrlBase = 'https://image.tmdb.org/t/p/w500';
  totalPaginas: number = 100;
  pesquisa: string = '';
  filmesFiltrados: Result[] = [];

  constructor(
    private filmeService: FilmeService,
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
    this.filmeService.buscarFilmes(page).subscribe((result) => {
      this.listaFilmes = result;
      this.filmesFiltrados = result;
    });
  }

  atualizarPaginaSelecionada() {
    if (this.paginaSelecionada >= 1 && this.paginaSelecionada <= 100) {
      this.atualizarListadeFilmes(this.paginaSelecionada);
    }
  }
}
