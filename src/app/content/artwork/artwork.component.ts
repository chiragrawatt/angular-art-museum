import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArtwork } from 'src/shared/models/interfaces/Artwork';
import { IArtworksResponse } from 'src/shared/models/interfaces/ArtworksResponse';
import { ArtworkService } from 'src/shared/services/artwork.service';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit {
  artwork: IArtwork | null = null;
  artwork_id: string | null = null;

  constructor(private artworkService: ArtworkService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.artwork_id = this.route.snapshot.paramMap.get('id');

    this.artworkService.artwork$
      .subscribe({
        next: res => {
          this.artwork = res;
          console.log(res);
        },
        error: err => console.log(err)
      });

    if (this.artwork_id != null) {
      this.artworkService.fetchArtworkById(this.artwork_id);
    }
  }
}
