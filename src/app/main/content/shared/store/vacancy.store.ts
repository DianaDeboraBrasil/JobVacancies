
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Vacancy } from '../models/vacancy.model';

@Injectable()
export class VacancyStore {

    private Subject = new BehaviorSubject<Vacancy>(null);
    vacancy = this.Subject.asObservable();

    constructor() { }

    getCurrent(): Observable<Vacancy> {
        return this.vacancy;
    }

    update(vacancy: Vacancy) {
        this.Subject.next(vacancy);
    }
}
