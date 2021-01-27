import { TestBed } from '@angular/core/testing';

import { WorksDataService } from './works-data.service';

describe('WorksDataService', () => {
  let service: WorksDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorksDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
