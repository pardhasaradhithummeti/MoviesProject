import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MoviesDataService } from '../Services/movies-data.service';
import { HttpClient } from '@angular/common/http';
import { DetailsServiceService } from '../Services/details-service.service';

@Component({
  selector: 'app-movie-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  movie: any;


  constructor(private route: ActivatedRoute, private service: MoviesDataService, private http: HttpClient , private details : DetailsServiceService) { }
  ngOnInit() {
    this.details.movieCard$.subscribe((data)=>{
      this.movie = data ;
    })
  }
}