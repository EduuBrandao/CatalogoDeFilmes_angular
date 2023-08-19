import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  constructor(
    private router: Router
  ) {}
  scrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.pageYOffset > 0;
  }

  navigateToFilmes() {
    this.router.navigate(['/listaFilmes']); // Substitua 'listaFilmes' pela rota desejada
  }
}
