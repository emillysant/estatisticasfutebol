import { Component, OnInit } from '@angular/core';
import { RequestService } from './../../../core/request/request.service';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries: Country[] = []
  apiKey!: string | null
  loading = false;

  constructor(
    private requestService: RequestService
  ) {
    this.apiKey = localStorage.getItem('apiKey')
   }

  ngOnInit(): void {
  }

  findCountries() {
    this.loading = true;
    this.requestService.loadingCountries(this.apiKey).subscribe((response: any) => {
      this.countries = response.body.response;
      console.log("response countries: ", this.countries)
      this.loading = false;
    })
  }

}
