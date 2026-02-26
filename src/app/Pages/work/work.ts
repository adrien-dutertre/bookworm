import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { SearchService } from '../../Services/search.service';
import { FavoritesService } from '../../Services/favorites.service';
import { DefaultUndefinedPipe } from '../../Services/Pipes/default-undefined-pipe';

@Component({
  selector: 'app-work',
  imports: [AsyncPipe, RouterLink, DefaultUndefinedPipe],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {
  private activatedRoute = inject(ActivatedRoute);
  searchService = inject(SearchService);
  readonly favoritesService = inject(FavoritesService);

  // Récupérer les données du resolver
  readonly workSubscription$ = this.activatedRoute
                                   .data
                                   .pipe(
                                      map((workData) => workData['work'])
                                    );
  
  // Gestion des favoris pour l'ouvrage
  favoriteManagement(workKey: string, workTitle: string, workPhoto: number) : void {
    if (this.favoritesService.isFavorite(workKey)) {
      this.favoritesService
          .removeFavorite(workKey);
    } else {
      this.favoritesService.addToFavorites(
        this.favoritesService
            .newFavorite(workKey, workTitle, workPhoto)
      );
    }
  }
}
