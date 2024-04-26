import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import { Movie } from "../../model/movie.entity";
import {MovieService} from "../../service/movie-service.service";

@Component({
  selector: 'the-home-page',
  standalone: true,
  imports: [ MatTableModule],
  templateUrl: './the-home-page.component.html',
  styleUrl: './the-home-page.component.css'
})
export class TheHomePageComponent implements OnInit {
  dataSource = new MatTableDataSource();
  movies: Movie[] = [];
  movieData!: Movie;
  displayedColumns = ['id', 'title', 'genre', 'duration', 'imgUrl'];

  @ViewChild(MatSort, {static:true}) sort!: MatSort;
  constructor(private movieService: MovieService) {
     this.movieData = {} as Movie;
  }
  ngOnInit(): void {
    this.getMovies();
  }
  getMovies(){
    this.movieService.getAll().subscribe((data: any) => {
      data.forEach((element: any) => {
        this.movieData = new Movie(element.id, element.title, element.genre, element.duration, element.imgUrl);
        this.movies.push(this.movieData);
      });
      this.dataSource.data = this.movies;
    });
  }

}
