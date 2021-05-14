
import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Util } from '../shared/util';
import { SpinnerService } from '../shared/services/spinner.service';
import { Router } from '@angular/router';
import { AlertaToastrService } from '../shared/services/alertaToastr.service';
import { Company } from '../shared/models/company.model';
import { CompanyService } from '../shared/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  company: Company = new Company();
  displayedColumns: string[] = ['name'];
  companies: Company[] = [];


  constructor(
    private util: Util,
    public spinnerService: SpinnerService,
    private readonly router: Router,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef,
    private readonly companyService: CompanyService,
    private toastrService: AlertaToastrService) {
    this.loadCompanies();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Name: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  loadCompanies() {
    this.companyService.getAll().subscribe(companies => {
      if (companies.length > 0) {
        this.companies = companies;
      }
    }, erro => {
      const message = erro;
      this.toastrService.showToasterWarning(message, 'Error!');
    });
  }

  registerCompany() {
    this.validation(result => {
      if (result) {
        this.company.id = 0;
        this.companyService.save(this.company).subscribe(company => {
          if (company) {
            const message = 'Company Registration successful!';
            this.toastrService.showToasterSuccess(message, 'Success');
            this.loadCompanies();

            this.company.name = '';
            this.registrationForm.Name.setValue('');
          }
        }, error => {
          const message = 'Error: ' + error;
          this.toastrService.showToasterError(message, 'Error');
        });
      }
    });
  }

  validation(callback) {
    if (this.util.IsNullOrUndefined(this.company.name)) {
      const message = 'Required field';
      this.toastrService.showToasterWarning(message, 'Warning!');
      callback(false);

    } else {
      callback(true);
    }
  }

  clean() {
    this.form.reset();
    this.company = new Company();
  }

  back(): void {
    this.clean();
    this.router.navigate(['app-vacancies-dashboard']);
  }

  get registrationForm() {
    return this.form.controls;
  }
}
