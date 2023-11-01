import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { ExploreComponent } from './content/explore/explore.component';
import { ArtworkComponent } from './content/artwork/artwork.component';

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
    path: "artwork/:id",
    component: ArtworkComponent
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
