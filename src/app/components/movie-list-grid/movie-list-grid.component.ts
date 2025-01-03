import { Component, Input } from '@angular/core';
import { Collection } from 'src/app/models/collection.interface';
import { Movie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-movie-list-grid',
  templateUrl: './movie-list-grid.component.html',
  styleUrls: ['./movie-list-grid.component.css'],
})
export class MovieListGridComponent {
  @Input() collection: any;
  displayedColumns: string[] = ['release_date', 'title', 'id'];
}
