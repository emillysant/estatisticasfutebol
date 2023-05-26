import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router,  private cookieService: CookieService) { }

  saveOnCookie(response: any)  {
    this.cookieService.set('token', response, undefined, undefined, undefined, false, 'Lax')
    setTimeout(()=>{
      this.cookieService.deleteAll();
      this.router.navigate(['/login']);
      //console.log("logout")
    }, 2*60*60*1000);
  }

  getToken() {
    return this.cookieService.get('token')
  }

  tokenIsValid(): boolean {
    return !!this.getToken()
  }

  tokenDecript() {
    return jwt_decode(this.getToken())
  }
}
