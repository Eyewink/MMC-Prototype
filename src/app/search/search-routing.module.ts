import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
	{ path: '', component: SearchComponent },
	{ path: 'results', pathMatch: 'full', component: ResultsComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class SearchRoutingModule {
}
