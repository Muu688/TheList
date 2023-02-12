import { TestBed } from '@angular/core/testing';

import { QueueAPIService } from './queue-api.service';

describe('QueueAPIService', () => {
  let service: QueueAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueueAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
