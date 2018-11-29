import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './components/start.component';

@NgModule({
	declarations: [ StartComponent ],
	imports: [
		CommonModule,
		StartRoutingModule
	]
})
export class StartModule {
}
