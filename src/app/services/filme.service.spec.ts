import { TestBed } from '@angular/core/testing';
import { FilmeService } from './filme.service';



describe('FilmeServiceService', () => {
  let service: FilmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
