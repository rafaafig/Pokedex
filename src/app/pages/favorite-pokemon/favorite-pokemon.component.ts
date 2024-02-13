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

  addFavoritePokemon(pokemon: Pokemon): void {
    this.favPokeService.addFavoritePokemon(pokemon);
    this.favoritePokemon = this.favPokeService.getAllFavoritePokemon();
    this.scrollToBottom();
    this.saveFav();
  }

  scrollToBottom(): void {
    setTimeout(() => {
      const bottomElement = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.renderer.setProperty(document.documentElement, 'scrollTop', bottomElement);
    });
  }

  deleteFavoritePokemon(pokemon: Pokemon): void {
    this.favPokeService.deleteFavoritePokemon(pokemon);
    this.favoritePokemon = this.favPokeService.getAllFavoritePokemon();
  }


  saveFav(): void {
    localStorage.setItem('favoritePokemon', JSON.stringify(this.favoritePokemon));
  }

  loadFavoritePokemon(): void {
    const savedFavoritePokemon = localStorage.getItem('favoritePokemon');
    if (savedFavoritePokemon) {
      this.favoritePokemon = JSON.parse(savedFavoritePokemon);
    }
  }

  addNewPokemon(): void {
    if (this.newPokemonId && this.newName) {
      this.apiService.addPokemon(this.newPokemonId, this.newName).subscribe(newPokemon => {
        this.favPokeService.addFavoritePokemon(newPokemon);
        this.favoritePokemon = this.favPokeService.getAllFavoritePokemon();
        console.log('New Pokémon added:', newPokemon);
      });
    } else {
      console.log('Please provide ID and name for the new Pokémon.');
    }
  }

  updateFavoritePokemonInLocal(pokemon: Pokemon, nwName: string): void {
    const index = this.favoritePokemon.findIndex(p => p.id === pokemon.id);
    if (index !== -1) {
      this.favoritePokemon[index].name = nwName;
      // Save the changes to local storage
      this.saveFav();
    }
  }


}
