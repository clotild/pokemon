import { Result } from './result';
export interface Pokemon {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}
