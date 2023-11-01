import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IArtworkResponse } from 'src/shared/models/interfaces/ArtworkResponse';
import { ArtworkService } from 'src/shared/services/artwork.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  responseData: IArtworkResponse | null = null;
  currentPage : number = 1;
  isLoaded: boolean = false;

  constructor(private artworkService : ArtworkService) {}

  ngOnInit(): void {
    this.artworkService.artworks$.subscribe({
      next: res => {
        this.responseData = res;
        console.log(this.responseData?.data);
        this.isLoaded = true;
      },
      error: err => console.log(err)
    })
    this.artworkService.fetchArtworks(1,12); 
  }

  handlePageChange(pageEvent: PageEvent) {
    this.artworkService.fetchArtworks(pageEvent.pageIndex+1, pageEvent.pageSize);
    this.isLoaded = false;
  }
}
