
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacanciesDashboardComponent } from './vacanciesDashboard.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [VacanciesDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [VacanciesDashboardComponent]
})
export class VacanciesDashboardModule { }
