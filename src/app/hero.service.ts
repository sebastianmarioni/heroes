import { Hero } from './hero.model';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHero(id: number):Observable<Hero> {
     // For now, assume that a hero with the specified `id` always exists.
  // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find( h => h.id===id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  constructor(private messageService:MessageService){

  }

  getHeroes(): Observable<Hero[]> {
    const heroes= of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }
}
