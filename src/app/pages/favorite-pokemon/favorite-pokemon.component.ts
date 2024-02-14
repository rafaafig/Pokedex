import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiPokemonService, Pokemon } from '../../service/api-pokemon.service';
import { FavPokeService } from '../../service/fav-poke.service';

@Component({
  selector: 'app-favorite-pokemon',
  templateUrl: './favorite-pokemon.component.html',
  styleUrls: ['./favorite-pokemon.component.css']
})
export class FavoritePokemonComponent implements OnInit {

  pokemons: Pokemon[] = [];
  favoritePokemon: Pokemon[] = [];
  newName: string = '';
  newPokemonId: number = 0;
  nwName: string = '';
  

  constructor(
    private apiService: ApiPokemonService,
    private renderer: Renderer2,
    private favPokeService: FavPokeService
  ) { }

  ngOnInit(): void {
    this.apiService.listAllPokemon().subscribe(
      (pokemons: Pokemon[]) => {
        this.pokemons = pokemons;
        this.loadFavoritePokemon();
      }
    );
  }

  getImageUrl(id: number): string {
    return this.apiService.getPokeImage(id);
  }


  public searchPokemonList(searchValue: string): void {
    if (searchValue.trim() !== '') {
      this.apiService.listAllPokemon().subscribe(
        (pokemons: Pokemon[]) => {
          const filteredPokemons = pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
          );
          this.pokemons = filteredPokemons;
        }
      );
    }
  }

  scrollToBottom(): void {
    setTimeout(() => {
      const bottomElement = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.renderer.setProperty(document.documentElement, 'scrollTop', bottomElement);
    });
  }


  loadFavoritePokemon(): void {
    this.favoritePokemon = this.favPokeService.getFavoritePokemon();
  }

  addFavoritePokemon(pokemon: Pokemon): void {
    this.favPokeService.addFavoritePokemon(pokemon);
    this.loadFavoritePokemon();
    this.scrollToBottom();
  }

  deleteFavoritePokemon(pokemon: Pokemon): void {
    this.favPokeService.deleteFavoritePokemon(pokemon);
    this.loadFavoritePokemon();
  }

  isFavorite(pokemon: Pokemon): boolean {
    return this.favoritePokemon.some(fav => fav.id === pokemon.id);
    
  }


  addPokemon() {
    const newPokemon: Pokemon = {
      id: Math.floor(Math.random() * 1000),
      name: 'New Pokemon',
      height: 0,
      weight: 0,
      types: [],
      family: ''
    };
    this.apiService.addPokemonAPI(newPokemon.id, newPokemon.name).subscribe(() => {

    }, error => {

    });
  }
}
