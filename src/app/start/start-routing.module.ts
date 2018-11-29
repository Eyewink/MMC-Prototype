import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start.component';

const routes: Routes = [
	{ path: '', component: StartComponent }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class StartRoutingModule {
}
