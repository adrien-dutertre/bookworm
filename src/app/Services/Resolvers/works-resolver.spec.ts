import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { worksResolver } from './works-resolver';

describe('worksResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => worksResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
