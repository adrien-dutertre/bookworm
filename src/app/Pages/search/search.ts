import { Component, inject, OnDestroy, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { SearchService } from '../../Services/search.service';
import { Subscription, tap } from 'rxjs';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-search',
  imports: [RouterLink, FormField],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  searchService = inject(SearchService);
  searchResults = this.searchService.works;

  private subscription!: Subscription;

  loading = signal(false);

  // Formulaire de recherche
  searchModel = signal({
    query: ''
  })
  searchForm = form(this.searchModel);

  // Requête de recherche
  search(event: Event): void {
    event.preventDefault();

    this.loading.set(true);
    this.subscription = this.searchService
                            .getWorks(this.searchModel().query)
                            .subscribe(() => {
                              this.loading.set(false);
                            });
  }
}