import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/User';
import { RequestService } from './../../core/request/request.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  apiKey!: string;
  user: User = new User;
  error = {
    status: false,
    text: ''
  }

  constructor(
    private requestService: RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async login() {
    console.log("apiKey: ", this.apiKey);

    try {
      const response: any = await this.requestService.autentication(this.apiKey).toPromise() as HttpResponse<User>;

      console.log("response: ", response);

      if (response?.body.errors.length === 0) {
        this.user = {
          firstname: response.body.response?.account.firstname  ?? '',
          lastname: response.body.response?.account.lastname ?? '',
          email: response.body.response?.account.email ?? '',
        };

        this.requestService.autorizationCheck(true);
        localStorage.setItem('apiKey', this.apiKey);
        localStorage.setItem('firstname', this.user.firstname)
        this.router.navigate(['home']);
        console.log("Usuário Logado: ", this.user);
      } else {
        this.error = {
          status: true,
          text: response?.body.errors
        }
      }
    } catch (error) {
      console.error("Erro ao fazer login: ", error);
      this.error.status = true
    }
  }

}
