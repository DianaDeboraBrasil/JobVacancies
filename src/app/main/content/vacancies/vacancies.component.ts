import { VacancyStore } from './../shared/store/vacancy.store';
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Util } from '../shared/util';
import { SpinnerService } from '../shared/services/spinner.service';
import { Router } from '@angular/router';
import { AlertaToastrService } from '../shared/services/alertaToastr.service';
import { CompanyService } from '../shared/services/company.service';
import { Company } from '../shared/models/company.model';
import { Vacancy } from '../shared/models/vacancy.model';
import { VacancyService } from '../shared/services/vacancy.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  listVacancy: any;
  companies: Company[] = [];
  vacancy: Vacancy = new Vacancy();

  constructor(
    private util: Util,
    public spinnerService: SpinnerService,
    private readonly router: Router,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef,
    private readonly companyService: CompanyService,
    private readonly vacancyService: VacancyService,
    private readonly vacancyStore: VacancyStore,
    private toastrService: AlertaToastrService,
    private ref: ChangeDetectorRef) {
    this.loadListCompany();
    this.vacancyStore.getCurrent().subscribe(result => {
      if (result) {
        this.vacancy = result;
      }
    }
    );
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      Company: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  loadListCompany() {
    this.companyService.getAll().subscribe(company => {
      this.companies = company;
    });
  }

  vacancyRegistration() {
    this.validateRegistration(resultado => {
      if (resultado) {
        this.vacancy.id = 0;
        this.vacancyService.save(this.vacancy).subscribe(vacancy => {
          if (vacancy) {
            const mensagem = 'Vacancy Registration successful';
            this.toastrService.showToasterSuccess(mensagem, 'Success');
            this.clean();
            this.router.navigate(['app-vacancies-dashboard']);
          }
        }, erro => {
          const mensagem = erro;
          this.toastrService.showToasterError(mensagem, 'Error!');
        });
      }
    });
  }

  validateRegistration(callback) {
    if (this.util.IsNullOrUndefined(this.vacancy.name)) {
      const mensagem = 'Required field';
      this.toastrService.showToasterWarning(mensagem, 'Warning!');
      callback(false);
    } else {
      callback(true);
    }
  }
  clean() {
    this.form.reset();
    this.vacancy = new Vacancy();
  }
  back(): void {
    this.clean();
    this.router.navigate(['app-vacancies-dashboard']);
  }

}
