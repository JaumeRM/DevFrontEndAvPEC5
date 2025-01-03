import { Component, Input, OnInit } from '@angular/core';
import { Collection } from 'src/app/models/collection.interface';
import { Movie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-movie-list-grid',
  templateUrl: './movie-list-grid.component.html',
  styleUrls: ['./movie-list-grid.component.css'],
})
export class MovieListGridComponent implements OnInit {
  @Input() collection: any;
  movies: Movie[] = [];
  displayedColumns: string[] = ['id', 'title'];

  ngOnInit(): void {
    const movies_tmp = [];

    for (var i in this.collection.parts) {
      movies_tmp.push({
        id: this.collection.parts[i].id,
        title: this.collection.parts[i].title,
        poster_path: '',
      });
    }
    this.movies = movies_tmp;
  }
}
