import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeDislikeService {

  constructor() { }

  private armazenarValor(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  private obterValorArmazenado(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  ativarLike(filmId: number, value: boolean) {
    this.armazenarValor(`like-${filmId}`, value);
  }

  buscarLikeAtivo(filmId: number): boolean {
    return this.obterValorArmazenado(`like-${filmId}`) || false;
  }

  ativarDeslike(filmId: number, value: boolean) {
    this.armazenarValor(`dislike-${filmId}`, value);
  }

  buscarDeslikeAtivo(filmId: number): boolean {
    return this.obterValorArmazenado(`dislike-${filmId}`) || false;
  }
}
