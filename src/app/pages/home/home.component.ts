import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  firstname!: string | null;
  countriesPage: boolean = false

  constructor(
  ) {
    this.firstname = localStorage.getItem('firstname')
    console.log('usuario nome: ', this.firstname)
  }

  ngOnInit(): void {
  }

}
