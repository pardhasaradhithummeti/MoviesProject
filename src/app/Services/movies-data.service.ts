import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subscribe } from 'diagnostics_channel';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {
  moviesData: any[] = []; // always defined as an array

  constructor(private http: HttpClient) {
  
  }

  getMovies() {
    return  this.http.get<any[]>("http://localhost:3072/api/Movie");
  }
}