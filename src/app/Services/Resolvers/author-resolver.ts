import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { inject } from '@angular/core';
import { author } from '../Interface/utils.interface';
import { SearchService } from '../search.service';

export const authorResolver: ResolveFn<author> = (route, state): Observable<author | RedirectCommand> => {
  const searchService = inject(SearchService);
  const router = inject(Router);

  return searchService.getDetailledAuthor(route.params['id'])
                      .pipe(
                        catchError((error) => {
                          return of(new RedirectCommand(router.parseUrl('/404')));
                        })
                      );
};
