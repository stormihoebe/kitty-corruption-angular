import { TestBed, inject } from '@angular/core/testing';

import { CatService } from './cat.service';

describe('CatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatService]
    });
  });

  it('should ...', inject([CatService], (service: CatService) => {
    expect(service).toBeTruthy();
  }));
});
