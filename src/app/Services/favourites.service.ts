import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  favoritesUrl = "http://localhost:3072/api/Movie/addtoFavourite/";
  constructor(private http: HttpClient) { }

  addToFavorites(movieId: number) {
    return this.http.post(this.favoritesUrl + movieId, {})
  }
}
