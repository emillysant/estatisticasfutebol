import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token/token.service';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService,  public tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let auth:any;
    let authReq:any
    let arrayRota = request.url.split("/")

    let token: any = {}
    try{
      token = this.tokenService.tokenDecript()
    }catch{}

    if (arrayRota[arrayRota.length-1]!="login"){
      const cookie = (this.cookieService.get("token"));
      auth = `Bearer ${cookie}`;
      authReq = request.clone({headers: request.headers.set('Authorization', auth)});

      return next.handle(authReq);
    }

    return next.handle(request);
  }
}
