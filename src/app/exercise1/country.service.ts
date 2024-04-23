import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "./interfaces/country.interface";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries$: Observable<Country[]> = new Observable<Country[]>();

  constructor(
    private _httpClient: HttpClient
  ) {
    this.getCountries();
  }

  getCountries(): void {
    this.countries$ = this._httpClient.get<Country[]>('http://localhost:3000/countries')
  }
}