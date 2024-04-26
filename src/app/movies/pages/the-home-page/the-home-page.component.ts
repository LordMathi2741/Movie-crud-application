import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import { Movie } from "../../model/movie.entity";
import {MovieService} from "../../service/movie-service.service";
import {MatFormField} from "@angular/material/form-field";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatAnchor, MatButton} from "@angular/material/button";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {cloneDeep} from "lodash";


@Component({
  selector: 'the-home-page',
  standalone: true,
  imports: [MatTableModule, MatFormField, FormsModule, MatInput, MatButton, MatAnchor, CommonModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './the-home-page.component.html',
  styleUrl: './the-home-page.component.css'
})
export class TheHomePageComponent implements OnInit {
  dataSource = new MatTableDataSource();
  movies: Movie[] = [];
  movieData!: Movie;
  displayedColumns = ['id', 'title', 'genre', 'duration', 'imgUrl','actions'];
  @ViewChild('movieForm', {static: false})
  movieForm!: NgForm;
  @ViewChild(MatSort, {static:true}) sort!: MatSort;
  isEditMode= false;
  constructor(private movieService: MovieService) {
     this.movieData = {} as Movie;
  }
  ngOnInit(): void {

    this.dataSource.sort = this.sort;
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

  updateMovie(){
    this.movieService.modified(this.movieData.id, this.movieData).subscribe((response:any)=>{
      this.dataSource.data = this.dataSource.data.map((o: any) => {
        if (o.id == response.id) {
          o = response;
        }
        return o;
      });
    });
  }

  onSubmit() {
    if(this.movieForm.form.valid){
      if(this.isEditMode){
            this.updateMovie();
      }
    }
  }

  cancelEdit() {
     this.isEditMode = false;
     this.movieForm.resetForm();
  }

  editItem(element: any) {
     this.movieData = cloneDeep(element);
     this.isEditMode=true;
  }

}
