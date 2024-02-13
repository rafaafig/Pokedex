import { Component, OnInit } from '@angular/core';
import { ApiPokemonService, Pokemon } from '../../service/api-pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public pokemons: Pokemon = {} as Pokemon;


  constructor(
    private router: Router,
    private apiPokemonService: ApiPokemonService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idParam = +this.route.snapshot.paramMap.get('id')!;

    this.apiPokemonService.getPokemonById(idParam).subscribe(
      (pokemon: Pokemon) => {
        this.pokemons = pokemon;
      },
      (error) => {
        console.error('Error fetching Pokemon:', error);
      }
    );
  }

  getImageUrl(id: number): string {
    return this.apiPokemonService.getPokeImage(id);
  }

}
