import { Movie } from './movie.interface';

export interface Collection {
  id: string;
  name: string;
  parts: Movie[];
}
