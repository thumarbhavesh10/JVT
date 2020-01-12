import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsefulllinksComponent} from './usefulllinks.component';

const routes: Routes = [
  { path: '', component: UsefulllinksComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsefulllinksRoutingModule { }
