import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material/material.module';

import { HttpClientModule } from '@angular/common/http';
import { ArtworkCardComponent } from './components/artwork-card/artwork-card.component';
import { FavoriteArtworksComponent } from './content/favorite-artworks/favorite-artworks.component';

@NgModule({
  declarations: [
    ArtworkCardComponent,
    FavoriteArtworksComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    ArtworkCardComponent
  ]
})
export class SharedModule { }
