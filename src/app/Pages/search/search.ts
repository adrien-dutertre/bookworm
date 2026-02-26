import { Component, inject, signal } from '@angular/core';
import { SearchService } from '../../Services/search.service';
import { Subscription } from 'rxjs';
import { form, FormField } from '@angular/forms/signals';
import { Results } from "../../Components/results/results";

@Component({
  selector: 'app-search',
  imports: [FormField, Results],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  searchService = inject(SearchService);
  searchResults = this.searchService.works;

  private subscription!: Subscription;

  resultState = signal('pristine');

  gridDisplay = signal(true);

  // Formulaire de recherche
  searchModel = signal({
    query: ''
  })
  searchForm = form(this.searchModel);

  // Requête de recherche
  search(event: Event): void {
    event.preventDefault();

    this.resultState.set('loading');
    this.subscription = this.searchService
                            .getWorks(this.searchModel().query)
                            .subscribe(
                              () => this.resultState.set('loaded'),
                              (error) => {
                                this.resultState.set('error');
                                console.error('Erreur HTTP', error)
                              },
                            );
  }
}