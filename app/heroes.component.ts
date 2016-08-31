import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

const HEROES: Hero[] = [
	{ id: 11, name: 'Chakra' },
	{ id: 12, name: 'Batra' },
	{ id: 13, name: 'Matra' },
	{ id: 14, name: 'Patra' },
	{ id: 15, name: 'Rigla' },
	{ id: 16, name: 'Quant' },
	{ id: 17, name: 'Zarro' },
	{ id: 18, name: 'Case' },
	{ id: 19, name: 'Vao' },
	{ id: 20, name: 'Moto' }
];

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css']
	// providers: [HeroService]
})

export class HeroesComponent implements OnInit {
	title = 'Tour of Heroes';
	heroes = HEROES;
	selectedHero: Hero;

	constructor( private heroService: HeroService) { }

	ngOnInit(): void {
		this.getHeroes();
	}

	getHeroes(): void {
		this.heroService.getHeroes().then( heroes => this.heroes = heroes );
	}

	onSelect(hero: Hero) : void {
		this.selectedHero = hero;
	}
}