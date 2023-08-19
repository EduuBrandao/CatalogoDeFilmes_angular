import { Component, Input } from '@angular/core';
import { Result } from '../address-form/IListaFilmes';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {

  @Input() result: Result =
  {
    adult: true,
    backdrop_path: "",
    genre_ids: [0],
    id: 0,
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    release_date: "",
    title: "",
    video: true,
    vote_average: 0,
    vote_count: 0,
  }
}
