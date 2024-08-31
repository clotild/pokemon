import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayPokemonComponent } from './display-pokemon/display-pokemon.component';
import { DisplayPokemonDetailsComponent } from './display-pokemon-details/display-pokemon-details.component';
import { EncodeURIPipe } from './encode-uri.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DisplayPokemonComponent,
    DisplayPokemonDetailsComponent,
    EncodeURIPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
