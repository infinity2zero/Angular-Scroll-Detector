import { TestBed } from '@angular/core/testing';

import { NgScrollDetectorService } from './ng-scroll-detector.service';

describe('NgScrollDetectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgScrollDetectorService = TestBed.get(NgScrollDetectorService);
    expect(service).toBeTruthy();
  });
});
