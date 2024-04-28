import { Component } from '@angular/core';
import {CardsMoviesComponent} from "../../components/cards-movies/cards-movies.component";

@Component({
  selector: 'the-movies-page',
  standalone: true,
  imports: [
    CardsMoviesComponent
  ],
  templateUrl: './the-movies-page.component.html',
  styleUrl: './the-movies-page.component.css'
})
export class TheMoviesPageComponent {

}
