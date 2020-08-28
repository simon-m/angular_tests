import { TestBed } from '@angular/core/testing';

import { PictureLoaderService } from './picture-loader.service';

describe('PictureLoaderService', () => {
  let service: PictureLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PictureLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
