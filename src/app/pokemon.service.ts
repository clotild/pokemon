import { Injectable } from '@angular/core';
import * as superagent from 'superagent';
import { PokemonDetails } from './model/pokemonsDetails';
import { Sprites } from './model/sprites';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}
  getPokemonData() {
    return superagent
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.body);
  }
  getPokemonDetails(url: string) {
    return superagent.get(url).then((res) => {
      console.log('res', res.body);
      const apiRes = res.body;
      const pokDet: PokemonDetails = {
        ...apiRes,
        typePok: apiRes.types[0].type,
        images: {
          backview: apiRes.sprites.back_shiny,
          frontview: apiRes.sprites.front_shiny,
        },
      };

      return pokDet;
    });
  }
}
