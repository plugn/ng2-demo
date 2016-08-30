// #docregion pt1
import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
}

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
	selector: 'my-app',
	templateUrl: 'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css']
})
export class AppComponent {
	title = 'Tour of Heroes';
	heroes = HEROES;

	selectedHero: Hero;

	onSelect(hero: Hero) : void {
		this.selectedHero = hero;
	}
}
// #enddocregion pt1