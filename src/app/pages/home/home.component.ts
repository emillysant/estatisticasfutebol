import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  seasonSelected!: any;
  teamSelected!: any;

  showComponent: any = [
    { id: 0, name: 'countries', status: false },
    { id: 1, name: 'leagues', status: false },
    { id: 2, name: 'seasons', status: false },
    { id: 3, name: 'teams', status: false },
    { id: 4, name: 'statistics', status: false }
  ];


  constructor(
    private router: Router
  ) {
    this.firstname = localStorage.getItem('firstname')
    console.log('usuario nome: ', this.firstname)
  }

  ngOnInit(): void {
    setTimeout(() => {
      /** spinner ends after 5 seconds */
    }, 100000);
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

  selectionSeason($event: any) {
    this.seasonSelected = $event
    console.log("Temporada selecionada: ", this.seasonSelected)
    this.changeComponentStatus('teams')
  }

  selectionTeam($event: any) {
    this.teamSelected = $event
    console.log("time selecionado: ", this.teamSelected)
    this.changeComponentStatus('statistics')
  }

  loading($event: any) {
    console.log("loading; ", $event)
    if ($event) {
    } else {
    }
  }

  logout() {
    localStorage.removeItem('apiKey');
    localStorage.removeItem('firstname');
    this.router.navigate(['login'])
  }
}
