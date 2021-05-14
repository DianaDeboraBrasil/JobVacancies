import { Injectable } from '@angular/core';
import { ApiService } from './api.services';
import { BaseService } from 'src/app/core/base.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends ApiService implements BaseService<Company> {
  private strAction = 'Company';

  constructor(
    httpClient: HttpClient,
    private http: HttpClient,
    private route: Router) {
    super(httpClient, route);
  }

  getAll(): Observable<Company[]> {
    return this.get<Company[]>(this.strAction);
  }

  deleteById(id: number) {
    throw new Error('Method not implemented.');
  }

  save(entity: Company): Observable<Company> {

    return this.post<Company>(this.strAction, entity);


  }
}
