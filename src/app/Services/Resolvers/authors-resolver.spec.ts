import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { authorsResolver } from './authors-resolver';

describe('authorsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => authorsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
