import { TestBed } from '@angular/core/testing';

import { MoviesDataService } from '../Services/movies-data.service';

describe('MoviesDataService', () => {
  let service: MoviesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
