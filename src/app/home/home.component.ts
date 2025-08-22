import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../Services/movies-data.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DetailsServiceService } from '../Services/details-service.service';

@Component({
  selector: 'app-home',
  standalone : true,
  imports: [CommonModule, HttpClientModule , NavbarComponent, RouterModule , FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  favouriteUrl = "http://localhost:3072/api/Movie/addtoFavourite/"
  movies: any[] = [];
  filteredMovies : any[] = []
  constructor   (private moviesDataService: MoviesDataService , private router: Router , private detaitsServie : DetailsServiceService , private http : HttpClient,private cd : ChangeDetectorRef) {}
  ngOnInit(): void {
    this.loadMovies();
    this.cd.detectChanges();
  }
  loadMovies()
  {
     this.moviesDataService.getMovies().subscribe((data) => {
      this.movies = data;
      this.filteredMovies = data;
     })
  }
goToMovie(movie: any) {
  this.detaitsServie.togetId(movie)
  this.router.navigate(['movie',movie.id]);
}
  searchInput(search : any ){
    let filterdata = this.filteredMovies.filter(movie =>
      movie.title.toLowerCase().includes(search.toLowerCase()))
    this.movies = filterdata;  
  }

  favouriteMovie(id: number) {
    console.log(id);
    this.http.post(this.favouriteUrl + id, {}).subscribe(response => {
      console.log('Movie added to favourites:', response);
      this.loadMovies();
    });
  }
}
