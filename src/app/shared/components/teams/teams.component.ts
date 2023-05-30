import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RequestService } from './../../../core/request/request.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  @Input() seasonSelected!: any;
  @Input() leagueSelected!: any;
  @Output() teamSelected: EventEmitter<any> = new EventEmitter();

  apiKey!: any;
  arrayTeams!: any;

  constructor(
    private requestService: RequestService
  ) {
    this.apiKey = localStorage.getItem('apiKey')
  }

  ngOnInit(): void {
    this.findTeams(this.leagueSelected.league.id, this.seasonSelected, this.apiKey)
  }

  findTeams (leagueSelected: any, seasonSelected: any, apiKey: any) {
    this.requestService.loadingTeams(leagueSelected, seasonSelected, apiKey).subscribe((response: any) => {
      console.log("Teams: ", response)
      this.arrayTeams = response.body.response
    })
  }

  selectTeam(team: any) {
    this.teamSelected.emit(team)
  }
}
