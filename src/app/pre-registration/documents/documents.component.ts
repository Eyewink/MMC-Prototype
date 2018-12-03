import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-documents',
	templateUrl: './documents.component.html',
	styleUrls: [ './documents.component.less' ]
})
export class DocumentsComponent implements OnInit {
	isActive = [];
	constructor() {}

	toggleClass(id) {
		this.isActive[id] = !this.isActive[id];
	}

	ngOnInit() {
	}

}
