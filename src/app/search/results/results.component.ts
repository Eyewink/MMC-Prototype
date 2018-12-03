import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
	styleUrls: [ './results.component.less' ]
})
export class ResultsComponent implements OnInit {
	private __state = false;

	constructor() {
	}

	ngOnInit() {
	}

	toggle() {
		this.__state = !this.__state;
	}

	state(): boolean {
		return this.__state;
	}

}
