import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { MaterialModule } from '../material/material.module';
import { LeaguesComponent } from './leagues/leagues.component';
import { SeasonsComponent } from './seasons/seasons.component';



@NgModule({
  declarations: [
    CountriesComponent,
    LeaguesComponent,
    SeasonsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CountriesComponent,
    LeaguesComponent,
    SeasonsComponent
  ]
})
export class ComponentsModule { }
