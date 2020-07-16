import { TestBed } from '@angular/core/testing';

import { PageCompletedGuard } from './page-completed.guard';

describe('PageCompletedGuard', () => {
  let guard: PageCompletedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PageCompletedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
