import { TestBed } from '@angular/core/testing';

import { FilmeServiceService } from './filme-service.service';

describe('FilmeServiceService', () => {
  let service: FilmeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
