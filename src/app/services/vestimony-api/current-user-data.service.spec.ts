import { TestBed, inject } from '@angular/core/testing';

import { CurrentUserDataService } from './current-user-data.service';

describe('CurrentUserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentUserDataService]
    });
  });

  it('should be created', inject([CurrentUserDataService], (service: CurrentUserDataService) => {
    expect(service).toBeTruthy();
  }));
});
