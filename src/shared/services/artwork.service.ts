import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IArtworkResponse } from '../models/interfaces/ArtworkResponse';
import { ARTWORKS_API_URL } from '../constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  artworks$ : BehaviorSubject<IArtworkResponse | null> = new BehaviorSubject<IArtworkResponse | null>(null);

  constructor(private http: HttpClient) { }

  fetchArtworks(page: number, limit: number) : void {
    this.http.get(`${ARTWORKS_API_URL}?page=${page}&limit=${limit}`)
    .subscribe({
      next: res => this.artworks$.next(res as IArtworkResponse),
      error: err => console.log(err)
    });
  }
}
