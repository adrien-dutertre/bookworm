import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { inject } from '@angular/core';
import { singleExtendedWork } from '../Interface/utils.interface';
import { SearchService } from '../search.service';

export const workResolver: ResolveFn<singleExtendedWork> = (route, state): Observable<singleExtendedWork | RedirectCommand> => {
  const searchService = inject(SearchService);
  const router = inject(Router);
  
  return searchService.getAugmentedWork(route.params['id'])
                      .pipe(
                        catchError((error) => {
                          return of(new RedirectCommand(router.parseUrl('/404')));
                        })
                      );
  
};
