import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Result } from '../componentes/interfaces/IListaFilmes';
import { Descricao } from '../componentes/interfaces/descricao';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  api_filmes = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${page}&sort_by=popularity.desc"
  api_descricao = "https://api.themoviedb.org/3/movie/${id}?language=pt-BR"
  headers = new HttpHeaders({
    Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTYyYWU5MzM1NDI5ZmFkOTVjN2M3NmVmYWY3NzhiMSIsInN1YiI6IjY0ZGZkZDJkNWFiODFhMDBmZmMxZTVhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Wa2LAHELdxIl8LKVoorNKse8HeBahcb9wI6iu9LAMA',
    Accept: 'application/json',
  });

  constructor(private http: HttpClient) {
    const jsonFileUrl = '../../assets/config.json'; // Atualize o caminho do arquivo JSON
    this.loadTokenFromJson(jsonFileUrl);
  }

  private loadTokenFromJson(jsonFileUrl: string): void {
    this.http.get<any>(jsonFileUrl).subscribe(
      (data) => {
        const apiKey = data.apiKey;
        this.headers = new HttpHeaders({
          Authorization: `Bearer ${apiKey}`,
          Accept: 'application/json',
        });
      },
      (error) => {
        console.error('Error loading JSON file:', error);
      }
    );
  }

  buscarFilmes(page: number): Observable<Result[]> {
    return this.http
      .get<{ results: Result[] }>(this.api_filmes.replace("${page}", page.toString()), { headers: this.headers })
      .pipe(map((response) => response.results));
  }

  buscarDescricaoPorId(id: number): Observable<Descricao> {
    return this.http.get<Descricao>(this.api_descricao.replace("${id}", id.toString()), { headers: this.headers });
  }

}
