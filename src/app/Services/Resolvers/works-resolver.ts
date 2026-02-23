import { ResolveFn } from '@angular/router';

export const worksResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
