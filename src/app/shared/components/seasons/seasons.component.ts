import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {
  @Input() leagueSelected!: any;
  @Output() seasonSelected: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  selectionSeason(sesonYear: any) {
    this.seasonSelected.emit(sesonYear)
  }

}
