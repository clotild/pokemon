import { Component, OnInit } from '@angular/core';
import { PokemonDetails } from '../model/pokemonsDetails';
import { Pokemon } from '../model/pokemon';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-pokemon-details',
  templateUrl: './display-pokemon-details.component.html',
  styleUrl: './display-pokemon-details.component.css',
})
export class DisplayPokemonDetailsComponent implements OnInit {
  pokemonDetails?: PokemonDetails;
  pokemonData?: Pokemon;
  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const receivedUrl: string = this.route.snapshot.paramMap.get('url')!;
    console.log('url', receivedUrl);
    const decodedUrl: string = atob(receivedUrl);
    this.display(decodedUrl);
  }
  display(url: string): void {
    this.pokemonService
      .getPokemonDetails(url)
      .then((pokemonDetails: PokemonDetails) => {
        this.pokemonDetails = pokemonDetails;
      });
  }
}
