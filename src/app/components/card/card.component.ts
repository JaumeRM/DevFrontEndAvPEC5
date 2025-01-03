import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() movieIn: any;

  public movie: any;

  constructor() {}

  ngOnInit(): void {
    this.movie = this.movieIn;
  }
}
