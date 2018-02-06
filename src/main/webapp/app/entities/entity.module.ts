import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RfbroyaltyRfbLocationModule } from './rfb-location/rfb-location.module';
import { RfbroyaltyRfbEventModule } from './rfb-event/rfb-event.module';
import { RfbroyaltyRfbEventAttendanceModule } from './rfb-event-attendance/rfb-event-attendance.module';
import { RfbroyaltyRfbUserModule } from './rfb-user/rfb-user.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        RfbroyaltyRfbLocationModule,
        RfbroyaltyRfbEventModule,
        RfbroyaltyRfbEventAttendanceModule,
        RfbroyaltyRfbUserModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RfbroyaltyEntityModule {}
