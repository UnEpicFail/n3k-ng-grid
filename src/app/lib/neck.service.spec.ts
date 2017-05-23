import { TestBed, inject } from '@angular/core/testing';

import { NeckService } from './neck.service';

describe('NeckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NeckService]
    });
  });

  it('should be created', inject([NeckService], (service: NeckService) => {
    expect(service).toBeTruthy();
  }));
});
