import { ResolveFn } from '@angular/router';
import { iWork } from '../work.interface';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { WorkService } from '../work.service';

export const workResolver: ResolveFn<iWork> = (route, state): Observable<iWork> => {
  const workService = inject(WorkService);
  return workService.getFullWork(route.params['id']);
};
