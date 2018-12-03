import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { FormComponent } from './search-form/search-form.component';
import { SearchComponent } from './search.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
	declarations: [ FormComponent, SearchComponent, ResultsComponent ],
	imports: [
		CommonModule,
		SearchRoutingModule
	]
})
export class SearchModule {
}
