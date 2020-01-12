import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurServicesRoutingModule } from './ourservices-routing.module';
import { OurservicesComponent } from './ourservices.component';

@NgModule({
  imports: [
    CommonModule,
    OurServicesRoutingModule
  ],
  declarations: [OurservicesComponent]
})
export class OurServicesModule { }
