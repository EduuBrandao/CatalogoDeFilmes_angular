import { Component } from '@angular/core';
import { AddressService } from './address.service';
import { Address } from './address-interface';
import { Pessoa } from './pessoa-interface';
import { Result } from './IListaFilmes';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FilmDetailsDialogComponent } from '../film-details-dialog/film-details-dialog.component';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {

  selectedPage: number = 1;
  showFilmInfo: boolean[] = [];
  cep = '';
  address!: Address; // You can define a proper interface for this data
  pessoa!: Pessoa
  listaPessoa: Pessoa[] = [];
  result: Result[] = [];
  tmdbImageUrlBase = 'https://image.tmdb.org/t/p/w500';
  totalPages: number = 10;

  constructor(private addressService: AddressService,
              private router: Router,
              private route: ActivatedRoute,
              private dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateFilmsList(this.selectedPage);
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

  openDialog(filme: any) {
    this.dialog.open(FilmDetailsDialogComponent, {
      data: { filme },
      maxWidth: '800px'
    });
  }


  updateFilmsList(page: number) {
    this.addressService.getFilmes(page).subscribe((result) => {
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
