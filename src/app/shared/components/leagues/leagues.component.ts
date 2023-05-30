import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { RequestService } from './../../../core/request/request.service';
import { League } from '../../interfaces/League';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {

  @Input() countrySelected!: Country;
  @Output() leagueSelected: EventEmitter<League> = new EventEmitter();

  apiKey!: string | null
  arrayLeagues: any = []

  constructor(
    private requestService: RequestService,
  ) {
    this.apiKey = localStorage.getItem('apiKey')
   }

  ngOnInit(): void {
    this.findLeagues()
  }

  findLeagues(){
    this.requestService.loadingLeagues(this.apiKey).subscribe((response: any) => {
        this.arrayLeagues = response.body.response.filter((obj: any) => obj.country.name === this.countrySelected.name)
        console.log("Leagues: ", this.arrayLeagues)
      }
    )
  }

  selectLeague(league: any) {
    this.leagueSelected.emit(league)
  }
}
