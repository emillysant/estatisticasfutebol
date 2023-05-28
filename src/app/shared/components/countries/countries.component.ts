import { Component, OnInit } from '@angular/core';
import { RequestService } from './../../../core/request/request.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  arrayCountries: any = []
  apiKey!: string | null
  loading = false;

  constructor(
    private requestService: RequestService
  ) {
    this.apiKey = localStorage.getItem('apiKey')
    console.log("teste: ", this.arrayCountries.length > 0)
  }

  ngOnInit(): void {
  }

  findCountries() {
    this.loading = true;
    this.requestService.loadingCountries(this.apiKey).subscribe((response: any) => {
      this.arrayCountries = response.body.response;
      console.log("response arrayCountries: ", this.arrayCountries)
      this.loading = false;
    })
  }

}
