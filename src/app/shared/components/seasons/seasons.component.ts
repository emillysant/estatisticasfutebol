import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {
  @Input() leagueSelected!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
