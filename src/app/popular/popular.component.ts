import { ChangeDetectorRef, Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesDataService } from '../Services/movies-data.service';

@Component({
  selector: 'app-popular',
  imports: [NavbarComponent , CommonModule, FormsModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent {
  popMovies: any[] = [];
  filteredMovies : any[] = [];
constructor(private service: MoviesDataService , private cd : ChangeDetectorRef) {
   
}

ngOnInit(): void {
    this.loadMovies();
    this.cd.detectChanges();
  }
  loadMovies()
  {
     this.service.getMovies().subscribe((data) => {
     this.popMovies = data.filter(movie => movie.isPopular === true);
     this.filteredMovies = this.popMovies;
   });
  }


searchInput(searchTerm: string) {
  let filterdata = this.filteredMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
    this.popMovies = filterdata;
}

}
