import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { authGuardGuard } from './Services/auth-guard.guard';
import { PopularComponent } from './popular/popular.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [authGuardGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'movie/:id', component: MovieDetailsComponent, canActivate: [authGuardGuard] },
    {path:  'popular' , component: PopularComponent} , 
    {path: 'favourites' , component: FavouritesComponent},
    {path: 'profile', component: ProfileComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
