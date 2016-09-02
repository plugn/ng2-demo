import { Component } from '@angular/core';
import { TreeComponent } from 'angular2-tree-component';

@Component({
	selector: 'my-app',
	directives: [ TreeComponent ],
	templateUrl: 'app/app.component.html'
})

export class AppComponent {
	title = 'Tour of Heroes';
}