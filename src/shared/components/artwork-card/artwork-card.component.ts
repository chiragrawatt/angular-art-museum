import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IArtwork } from 'src/shared/models/interfaces/Artwork';

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.scss']
})
export class ArtworkCardComponent {
  @Input() artwork!: IArtwork;

  constructor(private router: Router) {}

  navigateToArtwork(id: number) {
    this.router.navigate([`/artwork/${id}`])
  }
}
