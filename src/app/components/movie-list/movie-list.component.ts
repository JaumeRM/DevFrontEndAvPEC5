import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  collection: any;
  displayMode: string;

  constructor(private moviesService: MoviesService) {
    this.displayMode = 'list';
  }

  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe((collection) => {
      console.log(collection.parts);
      this.collection = collection;
    });
  }

  changeDisplay(mode: string): void {
    console.debug(`changeDisplay ${mode}`);
    this.displayMode = mode;
  }
}
