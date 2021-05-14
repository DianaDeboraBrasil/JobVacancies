import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacanciesComponent } from './vacancies.component';


@NgModule({
  declarations: [VacanciesComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [VacanciesComponent]
})
export class VacanciesModule { }
