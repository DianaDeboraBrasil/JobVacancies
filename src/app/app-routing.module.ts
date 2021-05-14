import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacanciesComponent } from './main/content/vacancies/vacancies.component';
import { VacanciesDashboardComponent } from './main/content/vacanciesDashboard/vacanciesDashboard.component';
import { CompanyComponent } from './main/content/company/company.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-vacancies-dashboard',
    pathMatch: 'full'
  },
  {
    path: 'app-vacancies-dashboard',
    component: VacanciesDashboardComponent
  },
  {
    path: 'app-vacancies',
    component: VacanciesComponent
  },
  {
    path: 'app-company',
    component: CompanyComponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
