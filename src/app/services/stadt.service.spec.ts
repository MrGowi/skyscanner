import { TestBed } from '@angular/core/testing';

import { StadtService } from './stadt.service';

describe('StadtService', () => {
  let service: StadtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StadtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
