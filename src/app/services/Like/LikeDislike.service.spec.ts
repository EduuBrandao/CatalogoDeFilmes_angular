/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LikeDislikeService } from './LikeDislike.service';

describe('Service: LikeDislike', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LikeDislikeService]
    });
  });

  it('should ...', inject([LikeDislikeService], (service: LikeDislikeService) => {
    expect(service).toBeTruthy();
  }));
});
