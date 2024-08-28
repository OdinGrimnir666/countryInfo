import { Injectable } from '@angular/core';
import {environment} from "../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../models/counrtyinfo/Countries";
import {Holiday} from "../models/counrtyinfo/Holiday";
import {CountryInfo} from "../models/counrtyinfo/Country";

@Injectable({
  providedIn: 'root'
})
export class CountryInfoRequestService {

  private readonly _host: string;
  private readonly _availableCountries: string;
  private readonly _countryInfo: string;
  private readonly _publicHolidays: string;

  constructor(private http:HttpClient) {
    this._host = environment.host + environment.version;
    this._availableCountries = this._host + environment.ApiMethod.AvailableCountries;
    this._countryInfo =this._host + environment.ApiMethod.CountryInfo;
    this._publicHolidays =this._host + environment.ApiMethod.PublicHolidays;
  }

  GetAvailableCountries(): Observable<Country[]> {
    console.log(this._availableCountries)
    return this.http.get<Country[]>(this._availableCountries);
  }

  GetPublicHolidays(codeCounty: string | null, year: number): Observable<Holiday[]> {
        return this.http.get<Holiday[]>(this._publicHolidays+year+"/"+codeCounty);
    }

  GetInfoCountry(codeCounty: string | null): Observable<CountryInfo> {
    return this.http.get<CountryInfo>(this._countryInfo+codeCounty);
  }
}
