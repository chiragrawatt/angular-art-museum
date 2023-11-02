import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/shared/favorites.service';
import { IArtworksResponse } from 'src/shared/models/interfaces/ArtworksResponse';
import { ArtworkService } from 'src/shared/services/artwork.service';

@Component({
  selector: 'app-favorite-artworks',
  templateUrl: './favorite-artworks.component.html',
  styleUrls: ['./favorite-artworks.component.scss']
})
export class FavoriteArtworksComponent implements OnInit {
  isLoaded : boolean = false;
  responseData: IArtworksResponse | null = null;
  favorites : number[] = [];

  constructor(private artworkService: ArtworkService, private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();

    this.artworkService.artworks$.subscribe({
      next: res => {
        this.responseData = res;
        this.isLoaded = true;
      },
      error: err => console.log(err)
    })

    if(this.favorites.length>0) {
      this.artworkService.fetchArtworksById(this.favorites);
    }
  }
}
