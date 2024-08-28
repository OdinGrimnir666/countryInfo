import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByCountryComponent } from './search-by-country.component';

describe('SearchByCountryComponent', () => {
  let component: SearchByCountryComponent;
  let fixture: ComponentFixture<SearchByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchByCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
