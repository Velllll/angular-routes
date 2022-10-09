import { TestBed } from '@angular/core/testing';

import { AutuGuard } from './autu.guard';

describe('AutuGuard', () => {
  let guard: AutuGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutuGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
