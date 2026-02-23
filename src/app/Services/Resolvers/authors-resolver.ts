import { ResolveFn } from '@angular/router';

export const authorsResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
