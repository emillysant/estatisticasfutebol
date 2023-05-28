import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  authorized: boolean = false;
  baseUrl: string = 'https://v3.football.api-sports.io';

  constructor(private httpClient: HttpClient) { }

  autentication<T>(key: string): Observable<HttpResponse<T>> {
    const headers = new HttpHeaders().set('x-apisports-key', key)
    return this.httpClient.get<T>(`${this.baseUrl}/status`, { headers, observe: 'response' })
  }

  autorizationCheck(value: boolean) {
    this.authorized = value
  }

  loadingCountries(apikey:  any) {
    const headers = new HttpHeaders().set('x-apisports-key', apikey!)
    return this.httpClient.get<any>(`${this.baseUrl}/countries`, { headers, observe: 'response' })
  }


}
