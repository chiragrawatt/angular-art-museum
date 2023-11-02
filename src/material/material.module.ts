import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';

const material = [
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  FormsModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatDividerModule
];


@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule { }
