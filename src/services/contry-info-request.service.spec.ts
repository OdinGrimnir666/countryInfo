import { TestBed } from '@angular/core/testing';
import {CountryInfoRequestService} from "./county-info-request.service";



describe('CountryInfoRequestService', () => {
  let service: CountryInfoRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryInfoRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
