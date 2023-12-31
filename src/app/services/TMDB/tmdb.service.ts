import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, mergeMap } from 'rxjs';
import { Result } from '../../interfaces/IListaFilmes';
import { Descricao } from '../../interfaces/IDescricao';
import { Elenco } from '../../interfaces/IElenco';

@Injectable({
  providedIn: 'root',
})
export class TMDBService {
  api_filmes = '';
  api_descricao = '';
  api_elenco = '';
  api_pesquisa = '';
  headers = new HttpHeaders({});

  constructor(private http: HttpClient) {}

  private carregarInformacoesDoJson(): Observable<void> {
    const jsonFileUrl = '../../assets/config.json';
    return this.http.get<any>(jsonFileUrl).pipe(
      map((data) => {
        const apiKey = data.apiKey;
        this.headers = new HttpHeaders({
          Authorization: `Bearer ${apiKey}`,
          Accept: 'application/json',
        });
        this.api_filmes = data.apiFilmes;
        this.api_descricao = data.apiDescricao;
        this.api_elenco = data.apiElenco;
        this.api_pesquisa = data.apiPesquisa;
      })
    );
  }

  buscarFilmes(page: number): Observable<Result[]> {
    return this.carregarInformacoesDoJson().pipe(
      mergeMap(() => {
        return this.http.get<{ results: Result[] }>(
          this.api_filmes.replace('${page}', page.toString()),
          { headers: this.headers }
        );
      }),
      map((response) => response.results)
    );
  }

  buscarDescricaoPorId(id: number): Observable<Descricao> {
    return this.carregarInformacoesDoJson().pipe(
      mergeMap(() => {
        return this.http.get<Descricao>(
          this.api_descricao.replace('${id}', id.toString()),
          { headers: this.headers }
        );
      })
    );
  }

  buscarElencoPorId(id: number): Observable<Elenco> {
    return this.carregarInformacoesDoJson().pipe(
      mergeMap(() => {
        return this.http.get<Elenco>(
          this.api_elenco.replace('${id}', id.toString()),
          { headers: this.headers }
        );
      })
    );
  }

  buscarFilmePorDigitacao(palavra: string): Observable<Elenco> {
    return this.carregarInformacoesDoJson().pipe(
      mergeMap(() => {
        return this.http.get<Elenco>(
          this.api_elenco.replace('${palavra}', palavra),
          { headers: this.headers }
        );
      })
    );
  }
}
