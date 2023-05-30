import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  firstname!: string | null;
  countriesPage: boolean = false;
  countrySelected!: any;
  leagueSelected!: any;
  showComponent: any = [
    { id: 0, name: 'countries', status: false },
    { id: 1, name: 'leagues', status: false },
    { id: 2, name: 'seasons', status: false },
    { id: 3, name: 'players', status: false },
    { id: 4, name: 'estatistics', status: false }
  ];


  constructor(
  ) {
    this.firstname = localStorage.getItem('firstname')
    console.log('usuario nome: ', this.firstname)
  }

  ngOnInit(): void {
  }

  changeComponentStatus(componentName: string) {
    for (const component of this.showComponent) {
      if (component.name === componentName) {
        component.status = true;
      } else {
        component.status = false;
      }
    }
  }

  selectionCountry($event: any) {
    this.countrySelected = $event
    console.log('Imprimindo pais selecionado: ', this.countrySelected)
    this.changeComponentStatus('leagues')
    console.log('componentes: ', this.showComponent)
  }

  selectionLeague($event: any) {
    this.leagueSelected = $event
    console.log("imprimindo league selecionado: ", this.leagueSelected)
    this.changeComponentStatus('seasons')
  }
}
