import { Component, Input } from '@angular/core';
import { Result } from '../address-form/IListaFilmes';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FilmeServiceService } from 'src/app/Services/filme-service.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {


  selectedPage: number = 1;
  showFilmInfo: boolean[] = [];
  cep = '';
  result: Result[] = [];
  tmdbImageUrlBase = 'https://image.tmdb.org/t/p/w500';
  totalPages: number = 100;

  constructor( private filmeService: FilmeServiceService,
              private router: Router,
              private route: ActivatedRoute,
              private dialog: MatDialog) {}


  ngOnInit(): void {
    this.updateFilmsList(this.selectedPage);
  }

  decreasePage() {
    if (this.selectedPage > 1) {
      this.selectedPage--;
      this.atualizarListaFilmes();
    }
  }

  increasePage() {
    if (this.selectedPage < this.totalPages) {
      this.selectedPage++;
      this.atualizarListaFilmes();
    }
  }

  generatePageArray(): number[] {
    const pageArray = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pageArray.push(i);
    }
    return pageArray;
  }

  navigatePage(direction: 'prev' | 'next'): void {
    if (direction === 'prev' && this.selectedPage > 1) {
      this.selectedPage--;
    } else if (direction === 'next' && this.selectedPage < this.totalPages) {
      this.selectedPage++;
    }
  }

  getPageNumbers(): number[] {
    const pageNumbers = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  getLastPage(): number {
    return this.totalPages;
  }

  showInfo(index: number): void {
    this.showFilmInfo[index] = true;
  }

  // Método para esconder as informações quando o mouse sair da imagem
  hideInfo(index: number): void {
    this.showFilmInfo[index] = false;
  }

  updateFilmsList(page: number) {
    this.filmeService.getFilmes(page).subscribe((result) => {
      console.log(result);
      this.result = result;
    });
  }
  updatePage(increase: boolean) {
    if (increase) {
      this.selectedPage++;
    } else {
      this.selectedPage--;
    }
  }

  atualizarListaFilmes() {
    if (this.selectedPage >= 1 && this.selectedPage <= 100) {
      this.updateFilmsList(this.selectedPage);
    } else {
      console.log('Valor inválido da página.');
      // Adicione algum feedback para o usuário aqui, se desejar
    }
  }

  descricao(id: number) {
    this.router.navigate([`/descricao/${id}`])
  }

}

