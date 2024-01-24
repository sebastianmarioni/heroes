import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-heroes',
    standalone: true,
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css',
    imports: [CommonModule, FormsModule, HeroDetailComponent,RouterLink]
})
export class HeroesComponent implements OnInit {
  
  constructor(private heroService: HeroService, private messageService:MessageService) {}
  ngOnInit(): void {
    this.getHeroes();
  }
  
 

  hero:Hero ={
    id: 1,
    name: 'Windstorm'
  };

  heroes:Hero[]= [];

  getHeroes():void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes= heroes );

    
  }
}
