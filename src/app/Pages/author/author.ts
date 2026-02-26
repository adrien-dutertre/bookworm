import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { SearchService } from '../../Services/search.service';
import { DefaultUndefinedPipe} from '../../Services/Pipes/default-undefined-pipe';
import { MissingImg } from '../../Components/missing-img/missing-img';

@Component({  
  selector: 'app-author',
  imports: [AsyncPipe, RouterLink, DefaultUndefinedPipe, MissingImg],
  templateUrl: './author.html',
  styleUrl: './author.css',
})
export class Author {
  private activatedRoute = inject(ActivatedRoute);
  searchService = inject(SearchService);

  readonly authorSubscription$ = this.activatedRoute
                                     .data
                                     .pipe(
                                        map((authorData) => authorData['author'])
                                      );

  readonly authorWorksSubscription$ = this.activatedRoute
                                          .data
                                          .pipe(
                                            map((worksData) => worksData['works'])
                                          );
}
