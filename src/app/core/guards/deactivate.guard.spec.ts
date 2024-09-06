import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { deactivateGuard } from './deactivate.guard';

describe('deactivateGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => deactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
