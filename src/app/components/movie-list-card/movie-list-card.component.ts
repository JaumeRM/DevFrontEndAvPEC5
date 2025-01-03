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
  selector: 'app-movie-list-card',
  templateUrl: './movie-list-card.component.html',
  styleUrls: ['./movie-list-card.component.css'],

  animations: [
    trigger('photosAnimation', [
      state('void', style({ transform: 'scalex(500%) scaley(500%)' })),
      transition('void <=> *', animate(1500)),
    ]),
  ],
})
export class MovieListCardComponent {
  @Input() collection: any;
}
