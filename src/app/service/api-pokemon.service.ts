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

  getPokeImage(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }


  getPokemonById(id: number): Observable<Pokemon> {
    const url = `${this.url}/${id}`;
    return this.http.get<Pokemon>(url);
  }


  addPokemonAPI(id: number, name: string): Observable<Pokemon> {
    const newPokemon: Pokemon = { id, name, height: 0, weight: 0, types: [], family: '' };
    return this.http.post<Pokemon>(this.url, newPokemon);
  }

  updatePokemonAPI(pokemon: Pokemon): Observable<Pokemon> {
    const url = `${this.url}/${pokemon.id}`; 
    return this.http.put<Pokemon>(url, pokemon);
  }


  deletePokemonAPI(id: number): Observable<void> {
    const url = `${this.url}/${id}`; 
    return this.http.delete<void>(url);
  }
}
