import { Component, Input } from '@angular/core';
import { Collection } from 'src/app/models/collection.interface';

import {
  animate,
  query,
  state,
  style,
  stagger,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-movie-list-grid',
  templateUrl: './movie-list-grid.component.html',
  styleUrls: ['./movie-list-grid.component.css'],

  animations: [
    trigger('photosAnimation', [
      state('void', style({ transform: 'scalex(500%) scaley(500%)' })),
      transition('void <=> *', animate(1500)),
    ]),
  ],
})
export class MovieListGridComponent {
  @Input() collection: any;
}
