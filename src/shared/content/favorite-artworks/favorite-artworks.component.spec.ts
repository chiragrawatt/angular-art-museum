import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteArtworksComponent } from './favorite-artworks.component';

describe('FavoriteArtworksComponent', () => {
  let component: FavoriteArtworksComponent;
  let fixture: ComponentFixture<FavoriteArtworksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteArtworksComponent]
    });
    fixture = TestBed.createComponent(FavoriteArtworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
