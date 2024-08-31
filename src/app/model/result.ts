import { PokemonDetails } from './pokemonsDetails';

export interface Result {
  name: string;
  url: string;
  pokemonDetails: PokemonDetails;
  flipImage: boolean;
}
