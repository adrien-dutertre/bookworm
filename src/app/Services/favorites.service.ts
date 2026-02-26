import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favorites = signal<string[]>([]);
  readonly count = computed(() => {
    return this.favorites()
               .length
  });

  // Ajouter aux favoris
  addToFavorites(workKey: string): void {
    this.favorites
        .update((favoritesWorks) => {
          return [...favoritesWorks, workKey]
        });
    this.saveFavorites();
  }

  // Vérifie l'appartenance aux favoris
  isFavorite(workKey: string): boolean {
    return this.favorites()
               .includes(workKey);
  }

  // Supprimer des favoris
  removeFavorite(workKey: string) : void {
    this.favorites
        .update((favoritesWorks) => {
          const filteredFavorites: string[] = favoritesWorks.filter((work: string) => {
            return work != workKey;
          });

          return [...filteredFavorites]
        });
    this.saveFavorites();
  }

  // Enregistrer les favoris dans le localStorage
  saveFavorites(): void {
    localStorage.setItem("favorites", this.favorites().join(";"));
  }

  // Récupérer les favoris dans le localStorage
  loadFavorites(): void {
    const loadedFavorites: string = localStorage.getItem("favorites") ?? "";
    this.favorites
        .set(
          loadedFavorites.split(";")
        );
  }
}
