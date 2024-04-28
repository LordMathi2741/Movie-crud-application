import { Routes } from '@angular/router';
import {TheHomePageComponent} from "./movies/pages/the-home-page/the-home-page.component";
import {TheMoviesPageComponent} from "./movies/pages/the-movies-page/the-movies-page.component";

export const routes: Routes = [
  {path: ' ', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: TheHomePageComponent},
  {path:'', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: TheMoviesPageComponent},

];
