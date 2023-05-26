import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/User';
import { RequestService } from './../../core/request/request.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User;

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log("apiKey: ", this.user.apiKey)
    this.requestService.autentication(this.user.apiKey).subscribe((response: HttpResponse<any> ) => {
      console.log("response: ", response)
    })
  }

}
