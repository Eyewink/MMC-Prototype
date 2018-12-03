import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-pre-registration',
	templateUrl: './pre-registration.component.html',
	styleUrls: [ './pre-registration.component.less' ]
})
export class PreRegistrationComponent implements OnInit {
	private __state = false;

	constructor(private router: ActivatedRoute, private rout: Router) {
		this.rout.events.subscribe((e) => {
			if (e instanceof NavigationEnd) {
				this.__state = false;
			}
		});
	}

	ngOnInit() {
	}

	off() {
		this.__state = false;
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
