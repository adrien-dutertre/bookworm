import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { SearchService } from '../../Services/search.service';

@Component({
  selector: 'app-work',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {
  private activatedRoute = inject(ActivatedRoute);
  searchService = inject(SearchService);

  readonly workSubscription$ = this.activatedRoute
                                   .data
                                   .pipe(
                                      map((workData) => workData['work'])
                                    );

}
