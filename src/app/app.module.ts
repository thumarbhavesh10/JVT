import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
//import { NotfoundComponent } from './notfound/notfound.component';

//import { ContactUsComponent } from './contact-us/contact-us.component';
//import { UsefulllinksComponent } from './usefulllinks/usefulllinks.component';
//import { OurservicesComponent } from './ourservices/ourservices.component';
//import { FlexLayoutModule } from '@angular/flex-layout';

//import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    //NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    //FlexLayoutModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 