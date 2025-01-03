import { Component, Input } from '@angular/core';
import { Collection } from 'src/app/models/collection.interface';
import { Movie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-movie-list-card',
  templateUrl: './movie-list-card.component.html',
  styleUrls: ['./movie-list-card.component.css'],
})
export class MovieListCardComponent {
  @Input() collection: any;
  displayedColumns: string[] = ['release_date', 'title', 'id'];
}
