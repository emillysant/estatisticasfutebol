import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    CountriesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CountriesComponent
  ]
})
export class ComponentsModule { }
