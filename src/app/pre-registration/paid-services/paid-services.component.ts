import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-paid-services',
	templateUrl: './paid-services.component.html',
	styleUrls: [ './paid-services.component.less' ]
})
export class PaidServicesComponent implements OnInit {
	isActive = [true];

	constructor() {
	}

	toggleClass(id) {
		this.isActive[id] = !this.isActive[id];
	}

	ngOnInit() {
	}

}
