import { Injectable } from '@angular/core';
import { Pokemon } from './api-pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class FavPokeService {

  private favPoke: Pokemon[] = [];

  constructor() { }

  addFavoritePokemon(pokemon: Pokemon): void {
    this.favPoke.push(pokemon);
  }

  deleteFavoritePokemon(pokemon: Pokemon): void {
    const index = this.favPoke.findIndex(p => p.id === pokemon.id);
    if (index !== -1) {
      this.favPoke.splice(index, 1);
    }
  }

  updateFavoritePokemon(updatedPokemon: Pokemon): void {
    const index = this.favPoke.findIndex(p => p.id === updatedPokemon.id);
    if (index !== -1) {
      this.favPoke[index] = updatedPokemon;
    }
  }

  getAllFavoritePokemon(): Pokemon[] {
    return this.favPoke;
  }
}

