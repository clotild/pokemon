import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayPokemonComponent } from './display-pokemon/display-pokemon.component';
import { DisplayPokemonDetailsComponent } from './display-pokemon-details/display-pokemon-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  { path: 'pokemon-details/:url', component: DisplayPokemonDetailsComponent },
  { path: 'pokemon', component: DisplayPokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
