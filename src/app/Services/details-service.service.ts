import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsServiceService {
  url = "http://localhost:3072/api/Movie";
  private movieById = new BehaviorSubject<any>(null);
  movieCard$ = this.movieById.asObservable() ; 

  constructor(private http : HttpClient) { }
  togetId(movie:any){
     this.movieById.next(movie);
  }
}
