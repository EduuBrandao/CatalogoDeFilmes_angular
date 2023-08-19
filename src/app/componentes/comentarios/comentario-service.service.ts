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

}
