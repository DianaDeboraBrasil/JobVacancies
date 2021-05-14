import { VacancyStore } from './../shared/store/vacancy.store';
import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { SpinnerService } from '../shared/services/spinner.service';
import { AlertaToastrService } from '../shared/services/alertaToastr.service';
import { VacancyService } from '../shared/services/vacancy.service';
import { Vacancy } from '../shared/models/vacancy.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacancies-dashboard',
  templateUrl: './vacanciesDashboard.component.html',
  styleUrls: ['./vacanciesDashboard.component.scss'],
})
export class VacanciesDashboardComponent implements OnInit, AfterViewInit {
  breakpoint: number;
  listVacancy: any;

  constructor(
    public spinnerService: SpinnerService,
    private cd: ChangeDetectorRef,
    private toastrService: AlertaToastrService,
    private readonly router: Router,
    private readonly vacancyService: VacancyService,
    private readonly vacancyStore: VacancyStore,
    private ref: ChangeDetectorRef
  ) {

    if (window.innerWidth <= 414) {
      this.breakpoint = 1;
    }
    if (window.innerWidth > 414 && window.innerWidth < 900) {
      this.breakpoint = 2;
    }
    if (window.innerWidth >= 900) {
      this.breakpoint = 4;
    }
    this.loadVacancies();
  }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.ref.detectChanges();
  }

  onResize() {
    if (window.innerWidth <= 414) {
      this.breakpoint = 1;
    }
    if (window.innerWidth > 414 && window.innerWidth < 900) {
      this.breakpoint = 2;
    }
    if (window.innerWidth >= 900) {
      this.breakpoint = 4;
    }
  }

  async loadVacancies() {
    console.log(this.listVacancy);
    this.vacancyService.getAll().subscribe((vacancy) => {
      this.listVacancy = vacancy;
      this.ref.detectChanges();
    });
  }

  detailClick(vacancy: Vacancy) {
     this.vacancyStore.update(vacancy);
     this.router.navigate(['app-vacancies']);
   }

}
