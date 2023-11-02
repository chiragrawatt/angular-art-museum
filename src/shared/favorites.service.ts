import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService implements OnInit{
  favorites : number[] = [];

  constructor() { 
    let localData : string | null = localStorage.getItem('favorites');
    console.log('localdata', localData);
    console.log("initialized");
    if(localData!=null) {
      this.favorites = JSON.parse(localData);
    }
  }

  ngOnInit(): void {
  }

  isFavorite(id: number) : boolean {
    return this.favorites.includes(id);
  }

  addToFavorites(id: number) : void {
    this.favorites.push(id);
    this.saveToLocalStorate();
  }

  removeFromFavorites(id: number) : void {
    let idx: number = this.favorites.findIndex(art_id  => {
      return art_id == id;
    })
    
    if(idx!=-1) {
      this.favorites.splice(idx, 1);
    }
    console.log(this.favorites);
    this.saveToLocalStorate();
  }

  getFavorites() : number[] {
    return this.favorites;
  }

  saveToLocalStorate() : void{
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
