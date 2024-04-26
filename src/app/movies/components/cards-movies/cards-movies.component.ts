import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MovieService} from "../service/movie-service.service";
import {Movie} from "../model/movie.entity";

@Component({
  selector: 'cards-movies',
  standalone: true,
  imports: [
    MatCardContent,
    MatCard
  ],
  templateUrl: './cards-movies.component.html',
  styleUrl: './cards-movies.component.css'
})
export class CardsMoviesComponent implements OnInit {
  movies: any[] = [];
  movieData: any;
  constructor(private movieService:MovieService) { }
  ngOnInit(): void {
       this.getMovies();
  }
  getMovies() {
     this.movieService.getAll().subscribe((data:any) => {
         data.forEach((movie:any)=>{
           this.movieData = new Movie(movie.id, movie.title, movie.genre,movie.duration, movie.imgUrl);
            this.movies.push(this.movieData);
         })
     });
  }

}
