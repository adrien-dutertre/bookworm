import { Component, inject, input } from '@angular/core';
import { SearchService } from '../../Services/search.service';
import { document } from '../../Services/Interface/utils.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-results',
  imports: [RouterLink],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {

  resultsData = input.required<document[]>();
  grid = input.required<boolean>();

  searchService = inject(SearchService);

}
