import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeAPIService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-poke-description',
  templateUrl: './poke-description.component.html',
  styleUrls: ['./poke-description.component.scss']
})
export class PokeDescriptionComponent implements OnInit {
  Pokemon:any =[];
  constructor(
    private activeRoute: ActivatedRoute,
    private pokeService: PokeAPIService
  ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.pokeService.getPokemon(id).subscribe(data =>{
      this.Pokemon = data;
    });
  }

}
