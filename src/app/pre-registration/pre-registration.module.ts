import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreRegistrationRoutingModule } from './pre-registration-routing.module';
import { CauseComponent } from './cause/cause.component';
import { PreRegistrationComponent } from './pre-registration.component';
import { ShortComponent } from './short-profile/short.component';
import { DocumentsComponent } from './documents/documents.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { CommentsComponent } from './comments/comments.component';
import { CancelComponent } from './cancel/cancel.component';
import { FullComponent } from './full-profile/full.component';
import { CouponComponent } from './coupon/coupon.component';

@NgModule({
	declarations: [
		CauseComponent,
		PreRegistrationComponent,
		ShortComponent,
		DocumentsComponent,
		DatetimeComponent,
		CommentsComponent,
		CancelComponent,
		FullComponent,
		CouponComponent
	],
	imports: [
		CommonModule,
		PreRegistrationRoutingModule
	]
})
export class PreRegistrationModule {
}
