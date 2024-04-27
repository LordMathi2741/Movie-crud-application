import { Routes } from '@angular/router';
import {TheHomePageComponent} from "./movies/pages/the-home-page/the-home-page.component";
import {CardsMoviesComponent} from "./movies/components/cards-movies/cards-movies.component";

export const routes: Routes = [
  {path: ' ', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: TheHomePageComponent},
  {path:'', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: CardsMoviesComponent},

];
