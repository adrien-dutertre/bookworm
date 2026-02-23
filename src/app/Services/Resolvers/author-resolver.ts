import { ResolveFn } from '@angular/router';
import { iAuthor } from '../author.interface';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { AuthorService } from '../author.service';

export const authorResolver: ResolveFn<iAuthor> = (route, state): Observable<iAuthor> => {
  const authorService = inject(AuthorService);
  return authorService.getDetailledAuthor(route.params['id']);
};
