import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPokemonService, Pokemon } from '../../service/api-pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  public pokemon: Pokemon = {} as Pokemon;

  public itemsPerPage: number = 10;
  public displayedPokemons: number = 0;
  public showLoadMoreButton: boolean = false;

  constructor(
    private router: Router,
    private apiPokemonService: ApiPokemonService) { }

  ngOnInit(): void {
    this.loadMorePokemons();

  }

  getImageUrl(id: number): string {
    return this.apiPokemonService.getPokeImage(id);
  }

  public loadMorePokemons(): void {
    const startIndex = this.displayedPokemons;
    const endIndex = startIndex + this.itemsPerPage;

    this.apiPokemonService.listAllPokemon().subscribe(
      (pokemons: Pokemon[]) => {
        const morePokemons = pokemons.slice(startIndex, endIndex);
        this.pokemons = this.pokemons.concat(morePokemons);
        this.displayedPokemons = this.pokemons.length;
      }
    );
  }

  redirectToDetails(id: number) {

    this.router.navigate(['/details', id]);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.showLoadMoreButton = true;
    } else {
      this.showLoadMoreButton = false;
    }
  }
  public searchPokemonList(searchValue: string): void {
    if (searchValue.trim() !== '') {
      this.apiPokemonService.listAllPokemon().subscribe(
        (pokemons: Pokemon[]) => {
          const filteredPokemons = pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
          );
          this.displayedPokemons = 0; 
          this.pokemons = filteredPokemons.slice(0, this.itemsPerPage); 
          this.showLoadMoreButton = filteredPokemons.length > this.itemsPerPage;
        }
      );
    } else {
      this.loadMorePokemons(); 
    }
  }
}
