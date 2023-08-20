import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeDislikeService {

  constructor() { }

  private setLocalStorageValue(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  private getLocalStorageValue(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  setLikeActive(filmId: number, value: boolean) {
    this.setLocalStorageValue(`like-${filmId}`, value);
  }

  getLikeActive(filmId: number): boolean {
    return this.getLocalStorageValue(`like-${filmId}`) || false;
  }

  setDislikeActive(filmId: number, value: boolean) {
    this.setLocalStorageValue(`dislike-${filmId}`, value);
  }

  getDislikeActive(filmId: number): boolean {
    return this.getLocalStorageValue(`dislike-${filmId}`) || false;
  }
}
