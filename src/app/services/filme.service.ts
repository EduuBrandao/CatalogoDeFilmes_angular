import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Result } from '../componentes/interfaces/IListaFilmes';
import { Descricao } from '../componentes/interfaces/descricao';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  headers = new HttpHeaders({
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTYyYWU5MzM1NDI5ZmFkOTVjN2M3NmVmYWY3NzhiMSIsInN1YiI6IjY0ZGZkZDJkNWFiODFhMDBmZmMxZTVhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Wa2LAHELdxIl8LKVoorNKse8HeBahcb9wI6iu9LAMA',
    Accept: 'application/json',
  });
  constructor(private http: HttpClient) {}


  getFilmes(page: number): Observable<Result[]> {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${page}&sort_by=popularity.desc`;
    return this.http
      .get<{ results: Result[] }>(apiUrl, { headers: this.headers })
      .pipe(map((response) => response.results));
  }

  buscarDescricaoPorId(id: number): Observable<Descricao> {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`;
    return this.http.get<Descricao>(apiUrl, { headers: this.headers });
  }
}
