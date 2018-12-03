import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

@NgModule({
	declarations: [ ProfileComponent, ProfileFormComponent ],
	imports: [
		CommonModule,
		ProfileRoutingModule
	]
})
export class ProfileModule {
}
