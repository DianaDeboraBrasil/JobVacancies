
import { ContentModule } from './main/content/content.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';
import { SharedModule } from './main/content/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './main/content/shared/helper/loader.interceptor';
import { VacanciesModule } from './main/content/vacancies/vacancies.module';
import { VacanciesDashboardModule } from './main/content/vacanciesDashboard/vacanciesDashboard.module';
import { CompanyModule } from './main/content/company/company.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainModule,
    ContentModule,
    SharedModule,
    AppRoutingModule,
    VacanciesModule,
    CompanyModule,
    VacanciesDashboardModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
