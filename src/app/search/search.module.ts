import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { FormComponent } from './components/form.component';
import { SearchComponent } from './components/search.component';
import { ResultsComponent } from './components/results.component';

@NgModule({
	declarations: [ FormComponent, SearchComponent, ResultsComponent ],
	imports: [
		CommonModule,
		SearchRoutingModule
	]
})
export class SearchModule {
}
