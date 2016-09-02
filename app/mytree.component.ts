import { Component } from '@angular/core';
import { TreeComponent } from 'angular2-tree-component';

@Component({
	selector: 'my-tree',
	directives: [ TreeComponent ],
	templateUrl: 'app/mytree.component.html'
})

export class MyTreeComponent {
	title = 'Tour of Heroes';

	nodes = [
		{
			id: 10,
			name: 'root10',
			children: [
				{ id: 11, name: 'child 11' },
				{ id: 12, name: 'child 12' }
			]
		},
		{
			id: 20,
			name: 'root20',
			children: [
				{ id: 21, name: 'child 21' },
				{ id: 22, name: 'child 22' }
			]
		},
		{
			id: 30,
			name: 'root30',
			children: [
				{ id: 31, name: 'child 31' },
				{
					id: 32,
					name: 'child 32',
					children: [
						{ id: 321, name: 'item 321' }
					]
				}
			]
		}
	];

}