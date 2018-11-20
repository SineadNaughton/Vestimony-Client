import { TestBed, inject } from '@angular/core/testing';

import { VestimonialDataService } from './vestimonial-data.service';

describe('VestimonialDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VestimonialDataService]
    });
  });

  it('should be created', inject([VestimonialDataService], (service: VestimonialDataService) => {
    expect(service).toBeTruthy();
  }));
});
