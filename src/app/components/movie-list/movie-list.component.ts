import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.interface';
import { MoviesService } from '../../services/movies.service';
import { Collection } from 'src/app/models/collection.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  collection: any;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe((collection) => {
      console.log(collection.parts);
      this.collection = collection;
    });
  }
}
