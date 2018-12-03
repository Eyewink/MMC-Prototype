import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-pre-registration',
	templateUrl: './pre-registration.component.html',
	styleUrls: [ './pre-registration.component.less' ]
})
export class PreRegistrationComponent implements OnInit {
	private __state = false;

	constructor(private router: ActivatedRoute) {
	}

	ngOnInit() {
	}

	toggle() {
		this.__state = !this.__state;
	}
	state(): boolean {
		return this.__state;
	}

	getData(id): boolean {
		return id === this.router.snapshot.children[0].data['cancel'];
	}

}
