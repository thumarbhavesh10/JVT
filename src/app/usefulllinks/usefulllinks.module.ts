import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsefulllinksRoutingModule } from './usefulllinks-routing.module';
import { UsefulllinksComponent } from './usefulllinks.component';

@NgModule({
  imports: [
    CommonModule,
    UsefulllinksRoutingModule
  ],
  declarations: [UsefulllinksComponent]
})
export class UsefulllinksModule { }
