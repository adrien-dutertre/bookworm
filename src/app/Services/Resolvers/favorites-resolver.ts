import { ResolveFn } from '@angular/router';

export const favoritesResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
