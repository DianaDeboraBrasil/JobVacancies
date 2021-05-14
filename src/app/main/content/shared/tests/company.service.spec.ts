
import { Company } from '../models/company.model';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CompanyService } from '../services/company.service';
describe('Verifica funções', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule,
            RouterTestingModule],
        providers: [CompanyService]
    }));

    it('Save', () => {
        const service: CompanyService = TestBed.get(CompanyService);
        let company = new Company();
        company = { id: 1, name: 'A' };
        service.save(company).subscribe(
            companies => {
                expect(companies).toEqual(company)
            }
        );
    });


});