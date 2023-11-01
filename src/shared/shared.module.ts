import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material/material.module';

import { HttpClientModule } from '@angular/common/http';
import { ArtworkCardComponent } from './components/artwork-card/artwork-card.component';

@NgModule({
  declarations: [
    ArtworkCardComponent
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
