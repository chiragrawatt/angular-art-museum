import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from 'src/shared/favorites.service';
import { IArtwork } from 'src/shared/models/interfaces/Artwork';

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.scss']
})
export class ArtworkCardComponent implements OnInit {
  @Input() artwork!: IArtwork;
  isFavorite: boolean = false;

  constructor(private router: Router, private favoriteService: FavoritesService) {}

  ngOnInit(): void {
    this.isFavorite = this.favoriteService.isFavorite(this.artwork.id);
    console.log(this.isFavorite);
  }

  navigateToArtwork(id: number) {
    this.router.navigate([`/artwork/${id}`])
  }

  removeFromFav(id : number, event: Event) {
    this.favoriteService.removeFromFavorites(id);
    this.isFavorite = this.favoriteService.isFavorite(this.artwork.id);
    event.stopPropagation();
  }

  addToFav(id: number, event: Event) {
    this.favoriteService.addToFavorites(id);
    this.isFavorite = this.favoriteService.isFavorite(this.artwork.id);
    event.stopPropagation();
  }
}
