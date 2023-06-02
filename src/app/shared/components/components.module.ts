import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { MaterialModule } from '../material/material.module';
import { LeaguesComponent } from './leagues/leagues.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { TeamsComponent } from './teams/teams.component';
import { StatisticsComponent } from './statistics/statistics.component';



@NgModule({
  declarations: [
    CountriesComponent,
    LeaguesComponent,
    SeasonsComponent,
    TeamsComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CountriesComponent,
    LeaguesComponent,
    SeasonsComponent,
    TeamsComponent,
    StatisticsComponent
  ]
})
export class ComponentsModule { }
