import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MoviesDataService } from '../Services/movies-data.service';
import { CommonModule } from '@angular/common';
import { FavouritesService } from '../Services/favourites.service';

@Component({
  selector: 'app-favourites',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  favouriteMovies: any[] = [];
  constructor(  private moviesDataService: MoviesDataService , private addtofavourites : FavouritesService) {
  }
  ngOnInit(): void {
    this.getfavourites();
  }

  getfavourites(): void {
    this.moviesDataService.getMovies().subscribe((data) => {
      console.log(data);
      
      this.favouriteMovies = data.filter(movie => movie.isFavourite === true);
      console.log(this.favouriteMovies);
    });
    
  }
  removeFromFav(id : number){
    this.addtofavourites.addToFavorites(id).subscribe({
      next: (response : any) => {
        this.favouriteMovies = response.movieList.filter((movie:any) => movie.isFavourite === true);

      },
      error: (error) => {
        console.error('Error adding movie to favorites:', error);
      }
    } );
  }
}
