import { TestBed } from '@angular/core/testing';

import { MuuBotAPIService } from './muubot-api.service';

describe('QueueAPIService', () => {
  let service: MuuBotAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuuBotAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
