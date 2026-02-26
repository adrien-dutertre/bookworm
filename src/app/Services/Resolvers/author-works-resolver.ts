import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { authorWorks } from '../Interface/utils.interface';
import { inject } from '@angular/core';
import { SearchService } from '../search.service';

export const authorWorksResolver: ResolveFn<authorWorks> = (route, state): Observable<authorWorks> => {
  const searchService = inject(SearchService);

  return searchService.getAuthorWorks(route.params['id']);
};