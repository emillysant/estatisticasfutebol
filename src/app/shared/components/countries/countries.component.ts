import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RequestService } from './../../../core/request/request.service';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  @Output() countrySelected: EventEmitter<Country> = new EventEmitter();
  @Output() loading: EventEmitter<any> = new EventEmitter();

  arrayCountries: any = []
  apiKey!: string | null

  constructor(
    private requestService: RequestService
  ) {
    this.apiKey = localStorage.getItem('apiKey')
    console.log("teste: ", this.arrayCountries.length > 0)
  }

  ngOnInit(): void {
    this.findCountries()
  }

  findCountries() {
    this.loading.emit(true)
    this.requestService.loadingCountries(this.apiKey).subscribe((response: any) => {
      this.arrayCountries = response.body.response;
      console.log("response arrayCountries: ", this.arrayCountries)
      this.loading.emit(false)
    })
  }

  selectCountry(country: any) {
    this.countrySelected.emit(country)
  }

}
