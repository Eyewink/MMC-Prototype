import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', loadChildren: './start/start.module#StartModule' },
	{ path: 'search', loadChildren: './search/search.module#SearchModule' },
	{ path: 'pre', loadChildren: './pre-registration/pre-registration.module#PreRegistrationModule' },
	{ path: 'profile', loadChildren: './profile/profile.module#ProfileModule'},
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {
}
