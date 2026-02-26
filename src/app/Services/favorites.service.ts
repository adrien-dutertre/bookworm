import { computed, Injectable, signal } from '@angular/core';
import { favoriteWork } from './Interface/utils.interface';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favorites = signal<favoriteWork[]>([]);
  readonly count = computed(() => {
    return this.favorites()
               .length
  });

  // Créer un objet favoris
  newFavorite(newKey: string, newTitle: string, newPhoto: number): favoriteWork {
    return {
      key: newKey,
      title: newTitle,
      photo: newPhoto
    }
  }

  // Ajouter aux favoris
  addToFavorites(newFavorite: favoriteWork): void {
    this.favorites
        .update((favoritesWorks) => {
          return [...favoritesWorks, newFavorite]
        });
    this.saveFavorites();
  }

  // Vérifie l'appartenance aux favoris
  isFavorite(workKey: string): boolean {
    return this.favorites()
               .some((favorite: favoriteWork) => favorite.key === workKey);
  }

  // Supprimer des favoris
  removeFavorite(workKey: string) : void {
    this.favorites
        .update((favoritesWorks: favoriteWork[]) => {
          const filteredFavorites: favoriteWork[] = favoritesWorks.filter((work: favoriteWork) => {
            return work.key != workKey;
          });

          return [...filteredFavorites]
        });
    this.saveFavorites();
  }

  // Enregistrer les favoris dans le localStorage
  saveFavorites(): void {
    localStorage.setItem("favorites", JSON.stringify(this.favorites()));
  }

  // Récupérer les favoris dans le localStorage
  loadFavorites(): void {
    if (localStorage.getItem("favorites")) {
      const loadedFavorites: string = localStorage.getItem("favorites") ?? "";
       this.favorites
           .set(
            JSON.parse(loadedFavorites)
           );
    }
    
  }
}
