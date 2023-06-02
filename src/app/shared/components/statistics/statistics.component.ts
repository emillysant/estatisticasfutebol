import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RequestService } from 'src/app/core/request/request.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @Input() leagueSelected!: any;
  @Input() seasonSelected!: any;
  @Input() teamSelected!: any;
  @Output() loading: EventEmitter<any> = new EventEmitter();

  apiKey!: any;
  statistics: any = undefined;

  constructor(
    private requestService: RequestService
  ) {
    this.apiKey = localStorage.getItem('apiKey')
  }

  async ngOnInit(): Promise<void> {
    await this.findStatistics(this.leagueSelected, this.seasonSelected, this.teamSelected, this.apiKey)
    if ( this.statistics != undefined) {
      console.log("statistics2: ", this.statistics)
    }
  }

  async findStatistics(leagueSelected: any, seasonSelected: any, teamSelected: any, apiKey: any) {
    this.loading.emit(true)
    this.requestService.loadingStatics(leagueSelected, seasonSelected, teamSelected, apiKey).subscribe(async (response: any) => {
      if (response.body.errors.length === 0) {
        this.statistics = await response.body.response
      }
      this.loading.emit(false)
    })
  }
}
