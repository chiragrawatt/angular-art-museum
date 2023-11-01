import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { IArtworksResponse } from 'src/shared/models/interfaces/ArtworksResponse';
import { ArtworkService } from 'src/shared/services/artwork.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  responseData: IArtworksResponse | null = null;
  currentPage: number = 1;
  searchText: string = "";
  isLoaded: boolean = false;

  constructor(private artworkService: ArtworkService) { }

  ngOnInit(): void {
    this.artworkService.artworks$.subscribe({
      next: res => {
        this.responseData = res;
        console.log(this.responseData);
        this.isLoaded = true;
      },
      error: err => console.log(err)
    })
    this.artworkService.fetchArtworks(1, 12, this.searchText);
  }

  handlePageChange(pageEvent: PageEvent) {
    this.artworkService.fetchArtworks(pageEvent.pageIndex + 1, pageEvent.pageSize, this.searchText);
    this.isLoaded = false;
  }

  getSearchedData(text: string) {
    this.searchText = text;
    this.artworkService.fetchArtworks(1, 12, text);
    this.isLoaded = false;
  }
}
