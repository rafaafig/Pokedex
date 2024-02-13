import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  family: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {
  private url: string = 'https://softwium.com/api/pokemons';

  constructor(private http: HttpClient) { }

  public listAllPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url).pipe(
      map((pokemons: Pokemon[]) => pokemons.slice(0, 150))
    );
  }

  getPokemonById(id: number): Observable<Pokemon> {
    const url = `${this.url}/${id}`;
    return this.http.get<Pokemon>(url);
  }

  getPokeImage(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }


  private favoritePokemon: Pokemon[] = [];

  addFavoritePokemon(pokemon: Pokemon): void {
    this.favoritePokemon.push(pokemon);
  }

  getFavoritePokemon(): Pokemon[] {
    return this.favoritePokemon;
  }

  deleteFavoritePokemonFromLocal(pokemon: Pokemon): void {
    const index = this.favoritePokemon.findIndex(p => p.id === pokemon.id);
    if (index !== -1) {
      this.favoritePokemon.splice(index, 1);
    }
  }

  updateFavoritePokemonInLocal(pokemon: Pokemon): void {
    const index = this.favoritePokemon.findIndex(p => p.id === pokemon.id);
    if (index !== -1) {
      this.favoritePokemon[index] = pokemon;
    }
  }

  addPokemon(id: number, name: string): Observable<Pokemon> {
    const newPokemon: Pokemon = { id, name, height: 0, weight: 0, types: [], family: '' };
    return this.http.post<Pokemon>(this.url, newPokemon);
  }

  deletePokemonAPI(id: number): Observable<void> {
    const url = `${this.url}/${id}`; 
    return this.http.delete<void>(url);
  }

  updatePokemonAPI(pokemon: Pokemon): Observable<Pokemon> {
    const url = `${this.url}/${pokemon.id}`; 
    return this.http.put<Pokemon>(url, pokemon);
  }

}
