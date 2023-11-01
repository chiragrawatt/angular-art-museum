import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { ExploreComponent } from './content/explore/explore.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "explore",
    component: ExploreComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
