import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../model/pokemon';
import { Result } from '../model/result';
import { PokemonDetails } from '../model/pokemonsDetails';

@Component({
  selector: 'app-display-pokemon',
  templateUrl: './display-pokemon.component.html',
  styleUrl: './display-pokemon.component.css',
})
export class DisplayPokemonComponent implements OnInit {
  pokemonData?: Pokemon;
  pokType: string = 'grass';
  resultFiltered?: Result[];
  searchString: string = '';
  pokemonList: Result[] = [];
  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.pokemonService.getPokemonData().then((pokemonData: Pokemon) => {
      this.pokemonData = pokemonData;
      if (this.pokemonData && this.pokemonData.results.length > 0) {
        const results = this.pokemonData.results;
        results.forEach((res) => {
          this.pokemonService
            .getPokemonDetails(res.url)
            .then((pokDetails: PokemonDetails) => {
              res.pokemonDetails = pokDetails;
            });
        });
        this.pokemonList = results;
        console.log('poklist', this.pokemonList);
      }
    });
    console.log('arrived');
  }

  search(): void {
    if (this.searchString === '') {
      this.resultFiltered = [];
    } else {
      this.resultFiltered = this.pokemonData?.results.filter((pok) =>
        pok.name.toLowerCase().startsWith(this.searchString)
      );
    }
  }
}
