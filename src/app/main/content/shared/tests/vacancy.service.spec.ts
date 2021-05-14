
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Vacancy } from "../models/vacancy.model";
import { VacancyService } from '../services/vacancy.service';
describe('Verifica funções', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule,
            RouterTestingModule],
        providers: [VacancyService]
    }));

    it('Save', () => {
        const service: VacancyService = TestBed.get(VacancyService);
        let vacancy = new Vacancy();
        vacancy = { id: 1, name: 'A', description: 'teste', companyId: 2 };
        service.save(vacancy).subscribe(
            vacancies => {
                expect(vacancies).toEqual(vacancy)
            }
        );
    });



});