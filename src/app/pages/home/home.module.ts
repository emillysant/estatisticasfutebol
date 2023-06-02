import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    NgxSpinnerModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
 }
