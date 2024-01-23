import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";


@Component({
    selector: 'app-heroes',
    standalone: true,
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css',
    imports: [CommonModule, FormsModule, HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  
  constructor(private heroService: HeroService) {}
  ngOnInit(): void {
    this.getHeroes();
  }
  
  selectedHero!:Hero

  hero:Hero ={
    id: 1,
    name: 'Windstorm'
  };

  heroes:Hero[]= [];

  onSelect(hero:Hero){
    this.selectedHero=hero
  }

  getHeroes():void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes= heroes );
  }
}
