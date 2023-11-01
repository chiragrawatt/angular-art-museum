import { Component, Input } from '@angular/core';
import { IArtwork } from 'src/shared/models/interfaces/Artwork';

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.scss']
})
export class ArtworkCardComponent {
  @Input() artwork!: IArtwork;
}
