import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  authorized: boolean = false

  constructor(private httpClient: HttpClient) { }

  autentication<T>(key: string):Observable<HttpResponse<T>>{
    const headers = new HttpHeaders().set('x-apisports-key',key)
    return this.httpClient.get<T>(`https://v3.football.api-sports.io/status`, {headers, observe: 'response'})
  }

  autorizationCheck(value: boolean){
    this.authorized = value
  }
}
