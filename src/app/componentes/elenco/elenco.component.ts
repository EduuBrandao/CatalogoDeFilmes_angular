import { Component, Input } from '@angular/core';
import { Cast, Elenco } from '../interfaces/IElenco';
import { TMDBService } from 'src/app/services/tmdb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css'],
})
export class ElencoComponent {
  @Input() filmeId!: number;
  tmdbImageUrlBase = 'https://image.tmdb.org/t/p/w500';
  elenco: Elenco = {
    id: 1,
    cast: [],
    crew: [],
  };

  currentSlide = 0;

  constructor(
    private tmdbService: TMDBService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tmdbService.buscarElencoPorId(parseInt(id!)).subscribe((elenco) => {
      this.elenco = elenco;
    });
  }

  pegarImagem(genero: number): string {
    if (genero == 1) return '../../../assets/imagens/mulher.jpg';
    else if (genero == 2) return '../../../assets/imagens/homem.jpg';
    return '../../../assets/imagens/neutro.jpg';
  }

  pegarImagemDePerfil(member: Cast): string {
    if (member.profile_path == null) {
      return this.pegarImagem(member.gender);
    }
    return this.tmdbImageUrlBase + member.profile_path;
  }

  limitarCaracterDosNomes(name: string, maxLength: number): string {
    if (name.length > maxLength) {
      return name.substr(0, maxLength) + '...';
    }
    return name;
  }
}
