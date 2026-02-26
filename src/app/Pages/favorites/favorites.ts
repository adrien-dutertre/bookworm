import { Component, inject, linkedSignal, OnChanges, signal, SimpleChanges } from '@angular/core';
import { SearchService } from '../../Services/search.service';
import { FavoritesService } from '../../Services/favorites.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites',
  imports: [RouterLink],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {

  readonly searchService = inject(SearchService);
  readonly favoritesService = inject(FavoritesService);

  favoriteWorks = linkedSignal(() => this.favoritesService.favorites());

}
