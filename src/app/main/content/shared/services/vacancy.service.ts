import { Injectable } from '@angular/core';
import { ApiService } from './api.services';
import { BaseService } from 'src/app/core/base.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Util } from '../util';
import { Vacancy } from '../models/vacancy.model';

@Injectable({
  providedIn: 'root'
})
export class VacancyService extends ApiService implements BaseService<Vacancy> {
  private strAction = 'Vacancy';

  constructor(
    httpClient: HttpClient,
    private http: HttpClient,
    private route: Router) {
    super(httpClient, route);
  }

  getAll(): Observable<Vacancy[]> {
    return this.get<Vacancy[]>(this.strAction);
  }

  deleteById(id: number) {
    throw new Error('Method not implemented.');
  }

  save(entity: Vacancy): Observable<Vacancy> {

    return this.post<Vacancy>(this.strAction, entity);

  }
}
