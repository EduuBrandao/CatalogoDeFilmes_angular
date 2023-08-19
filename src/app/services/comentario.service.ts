import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from '../componentes/interfaces/comentarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComentarioService {
  API_URL = 'http://localhost:3000/comentarios';
  constructor(private http: HttpClient) {}

  criarComentario(comentario: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(this.API_URL, comentario);
  }

  listarComentarios(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(this.API_URL);
  }

  excluirComentario(id: number): Observable<Comentario> {
    console.log('caiu aqui no excluir comentario service');
    const url = `${this.API_URL}/${id}`;
    return this.http.delete<Comentario>(url);
  }

  editarComentario(comentario: Comentario): Observable<Comentario> {
    console.log('caiu aqui no editar comentario service', comentario);
    const url = `${this.API_URL}/${comentario.id}`;
    return this.http.put<Comentario>(url, comentario);
  }

  buscarComentarioPorId(id: number): Observable<Comentario> {
    const url = `${this.API_URL}/${id}`;
    return this.http.get<Comentario>(url);
  }
}
