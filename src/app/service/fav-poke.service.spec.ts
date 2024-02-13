import { TestBed } from '@angular/core/testing';

import { FavPokeService } from './fav-poke.service';

describe('FavPokeService', () => {
  let service: FavPokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavPokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
