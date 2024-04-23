import { Component, OnInit } from '@angular/core';
import { Country } from './interfaces/country.interface';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { CountryService } from './country.service';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  countries$: Observable<Country[]> = new Observable<Country[]>();

  countriesDropdown: FormControl<Country['id']> = new FormControl<Country['id']>('');

  constructor(
    private _countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countries$ = this._countryService.countries$;
  }

}
