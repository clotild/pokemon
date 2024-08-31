import { Sprites } from './sprites';
import { Type } from './type';


export interface PokemonDetails {
  base_experience: number;
  height: number;
  images: Sprites;
  name: string;
  order: number;
  weight: number;
  typePok: Type;
}
