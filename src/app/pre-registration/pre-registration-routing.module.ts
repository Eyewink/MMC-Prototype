import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreRegistrationComponent } from './pre-registration.component';
import { CauseComponent } from './cause/cause.component';
import { DocumentsComponent } from './documents/documents.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { CommentsComponent } from './comments/comments.component';
import { CancelComponent } from './cancel/cancel.component';

const routes: Routes = [
	{ 	path: '',
		component: PreRegistrationComponent,
		children: [
			{ path: 'cause', component: CauseComponent, data: { cancel: 1 } },
			{ path: 'docs', component: DocumentsComponent, data: { cancel: 2 } },
			{ path: 'time', component: DatetimeComponent, data: { cancel: 2 }},
			{ path: 'comments', component: CommentsComponent, data: { cancel: 2 }},
			{ path: 'cancel', component: CancelComponent, data: { cancel: 3 }},
			{ path: '**', redirectTo: 'cause' }
		]
	},
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class PreRegistrationRoutingModule {
}
