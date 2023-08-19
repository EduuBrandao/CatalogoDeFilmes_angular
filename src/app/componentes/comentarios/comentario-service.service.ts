import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from '../interfaces/comentarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioServiceService {

  API = 'http://localhost:3000/comentarios'
  constructor(
    private http: HttpClient

  ) { }

  CriarComentario(comentario: Comentario) : Observable<Comentario> {
    return this.http.post<Comentario>(this.API, comentario)
  }

  ListaComentarios(): Observable<Comentario[]>{
    return this.http.get<Comentario[]>(this.API)
  }

  ExcluirComentario(id: number): Observable<Comentario> {
    console.log("caiu aqui no excluir comentario service")
    const url = `${this.API}/${id}`
    return this.http.delete<Comentario>(url)
  }

  buscarComentarioPorId(id: number): Observable<Comentario> {
    const url = `${this.API}/${id}`
    return this.http.get<Comentario>(url)
  }

}
