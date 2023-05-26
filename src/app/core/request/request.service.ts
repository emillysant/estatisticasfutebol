import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.baseUrl
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  autentication <T>(apiKey: string): Observable<HttpResponse<T>>{
    const headers = new HttpHeaders().set('x-apisports-key', apiKey)

    return this.httpClient.get<T>(`${environment.baseUrl}/status`, {headers, observe: 'response'})
  }
}
