import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-pre-registration',
	templateUrl: './pre-registration.component.html',
	styleUrls: [ './pre-registration.component.less' ]
})
export class PreRegistrationComponent implements OnInit {
	constructor(private router: ActivatedRoute) {
	}

	ngOnInit() {
	}

	getState(id): boolean {
		return  id === this.router.snapshot.children[0].data['cancel'];
	}

}
