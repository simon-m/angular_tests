import { TestBed } from '@angular/core/testing';

import { Comp1Service } from './comp1.service';

describe('Comp1Service', () => {
  let service: Comp1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Comp1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
