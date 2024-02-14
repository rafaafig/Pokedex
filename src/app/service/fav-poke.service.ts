import { Injectable } from '@angular/core';
import { Pokemon } from './api-pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class FavPokeService {

  private favPoke: Pokemon[] = [];

  private readonly FAVORITE_KEY = 'favoritePokemon';

  constructor() { }


  getFavoritePokemon(): Pokemon[] {
    const favoritesJson = localStorage.getItem(this.FAVORITE_KEY);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
  }

  addFavoritePokemon(pokemon: Pokemon): void {
    const favorites = this.getFavoritePokemon();
    favorites.push(pokemon);
    localStorage.setItem(this.FAVORITE_KEY, JSON.stringify(favorites));
  }

  deleteFavoritePokemon(pokemon: Pokemon): void {
    let favorites = this.getFavoritePokemon();
    favorites = favorites.filter(p => p.id !== pokemon.id);
    localStorage.setItem(this.FAVORITE_KEY, JSON.stringify(favorites));
  }
}
