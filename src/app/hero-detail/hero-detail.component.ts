import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; //
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?:Hero;

}
