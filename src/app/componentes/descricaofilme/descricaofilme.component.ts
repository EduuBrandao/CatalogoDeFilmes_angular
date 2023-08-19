import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from '../address-form/address.service';
import { Descricao } from '../interfaces/descricao';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-descricaofilme',
  templateUrl: './descricaofilme.component.html',
  styleUrls: ['./descricaofilme.component.css']
})
export class DescricaofilmeComponent {
  @Input() filmeId!: number;
  tmdbImageUrlBase = 'https://image.tmdb.org/t/p/w500';
  descricao: Descricao  = {
    adult: false,
    backdrop_path: '',
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage: '',
    id: 0,
    imdb_id: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    production_companies: [],
    production_countries: [],
    release_date: '',
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: '',
    tagline: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
    year: 0
  };



  constructor(
    private service: AddressService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    console.log("testeeee")
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarDescricaoPorId(parseInt(id!)).subscribe((descricao) => {
      this.descricao = descricao;
      this.descricao.year = new Date(this.descricao.release_date).getFullYear();
      this.adjustDateToLocalTime(); // Ajusta a data para o fuso horário local
      this.formatDate(); // Formata a data após receber os dados
    });
  }

  adjustDateToLocalTime(): void {
    if (this.descricao.release_date) {
      const utcDate = new Date(this.descricao.release_date);
      const localDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000);
      this.descricao.release_date = localDate.toISOString();
    }
  }

  formatDate(): void {
    if (this.descricao.release_date) {
      this.descricao.release_date = this.datePipe.transform(
        this.descricao.release_date,
        'dd/MM/yyyy'
      )!;
    }
  }

  getGenres(genres: any[]): string {
    return genres.map(genre => genre.name).join(', ');
  }

  convertToHours(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}min`;
  }
}
