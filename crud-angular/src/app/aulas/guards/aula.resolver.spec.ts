import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { aulaResolver } from './aula.resolver';

describe('aulaResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => aulaResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
