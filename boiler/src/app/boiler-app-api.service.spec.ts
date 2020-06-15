import { TestBed } from '@angular/core/testing';

import { BoilerAppApiService } from './boiler-app-api.service';

describe('BoilerAppApiService', () => {
  let service: BoilerAppApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoilerAppApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
