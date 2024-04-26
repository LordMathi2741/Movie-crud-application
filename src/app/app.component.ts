import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TheToolbarContentComponent} from "./public/the-toolbar-content/the-toolbar-content.component";
import {CardsMoviesComponent} from "./movies/components/cards-movies/cards-movies.component";
import {TheHomePageComponent} from "./movies/pages/the-home-page/the-home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TheToolbarContentComponent, CardsMoviesComponent, TheHomePageComponent, TheHomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica-crud';
}
