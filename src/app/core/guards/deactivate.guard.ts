import { CanActivateChildFn } from '@angular/router';

export const deactivateGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
