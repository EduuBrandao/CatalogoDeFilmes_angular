import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Result } from '../componentes/interfaces/IListaFilmes';
import { Descricao } from '../componentes/interfaces/descricao';

@Injectable({
  providedIn: 'root'
})
export class FilmeServiceService {

  constructor(private http: HttpClient) {}

  private readonly API =  "https://localhost:44369/api/ListaPessoas"
  private readonly APIfilmes =  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc"

  getAddressByCep(cep: string): Observable<any> {
    return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`);
  }

  getFilmes(page: number): Observable<Result[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTYyYWU5MzM1NDI5ZmFkOTVjN2M3NmVmYWY3NzhiMSIsInN1YiI6IjY0ZGZkZDJkNWFiODFhMDBmZmMxZTVhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Wa2LAHELdxIl8LKVoorNKse8HeBahcb9wI6iu9LAMA', // Seu token aqui
      'Accept': 'application/json'
    });

    const apiUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${page}&sort_by=popularity.desc`;

    return this.http.get<{ results: Result[] }>(apiUrl, { headers: headers })
      .pipe(map(response => response.results));
  }

  buscarDescricaoPorId(id: number): Observable<Descricao> {
    console.log("caiu aqui")
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTYyYWU5MzM1NDI5ZmFkOTVjN2M3NmVmYWY3NzhiMSIsInN1YiI6IjY0ZGZkZDJkNWFiODFhMDBmZmMxZTVhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Wa2LAHELdxIl8LKVoorNKse8HeBahcb9wI6iu9LAMA",
      'Accept': 'application/json'
    });

    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`;

    return this.http.get<Descricao>(apiUrl, { headers: headers });
  }


}
