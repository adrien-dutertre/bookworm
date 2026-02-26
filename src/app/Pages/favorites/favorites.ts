import { Component, inject } from '@angular/core';
import { SearchService } from '../../Services/search.service';
import { FavoritesService } from '../../Services/favorites.service';
import { concatMap, from, take, toArray } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-favorites',
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {

  readonly searchService = inject(SearchService);
  readonly favoritesService = inject(FavoritesService);

  favoriteWorks$ = from(this.favoritesService.favorites()).pipe(
    concatMap(favoriteKey => 
      this.searchService.getFullWork(favoriteKey)
    ),
    take(this.favoritesService
             .favorites()
             .length),
    toArray()
  );

}
