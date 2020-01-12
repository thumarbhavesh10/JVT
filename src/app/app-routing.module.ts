// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import {AboutUsComponent} from "./about-us/about-us.component";

// const routes: Routes = [
//   { path: 'about-us', component: AboutUsComponent },
// ];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { NgProgressModule } from '@ngx-progressbar/core';
//import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { RouterResolver } from './router.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'ourservices', loadChildren: './ourservices/ourservices.module#OurServicesModule' },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule' },
  { path: 'usefulllinks', loadChildren: './usefulllinks/usefulllinks.module#UsefulllinksModule' },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
  // { path: 'blogs', loadChildren: './blogs/blogs.module#BlogsModule' },
  
  // {
  //   path: 'login',
  //   loadChildren: './login/login.module#LoginModule',
  //   data: { showHeader: false, showSidebar: false }
  // },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    //NgProgressModule,
    //NgProgressRouterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
