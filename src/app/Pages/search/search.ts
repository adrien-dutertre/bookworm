import { Component, inject, OnDestroy, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { WorkService } from '../../Services/work.service';
import { Subscription } from 'rxjs';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-search',
  imports: [RouterLink, FormField],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  workService = inject(WorkService);
  searchResults = this.workService.works;

  private subscription!: Subscription;

  // Formulaire de recherche
  searchModel = signal({
    query: ''
  })
  searchForm = form(this.searchModel);

  // Requête de recherche
  search(event: Event): void {
    event.preventDefault();
    this.subscription = this.workService
                            .getWorks(this.searchModel().query)
                            .subscribe();
  }
}