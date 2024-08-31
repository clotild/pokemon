import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../model/pokemon';
import { Result } from '../model/result';
import { PokemonDetails } from '../model/pokemonsDetails';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-display-pokemon',
  templateUrl: './display-pokemon.component.html',
  styleUrl: './display-pokemon.component.css',
})
export class DisplayPokemonComponent implements OnInit {
  pokemonData?: Pokemon;
  switchImage: string = '';
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

  showFrontView(showed: Result) {
    console.info('on est rentré dans un div', showed);
    this.pokemonList.forEach((a) => {
      if (a.name === showed.name) {
        a.flipImage = true;
      }
    });
    //trouver le pokemon dont le nom est égale au nom duquel on est rentré(showed)
  }

  showBackView(showed: Result) {
    console.info('on est rentré dans un div', showed);
    this.pokemonList.forEach((a) => {
      if (a.name === showed.name) {
        a.flipImage = false;
      }
    });
    //trouver le pokemon dont le nom est égale au nom duquel on est rentré(showed)
  }
}
