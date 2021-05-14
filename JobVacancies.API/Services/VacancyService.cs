using JobVacancies.API.Domain.Models;
using JobVacancies.API.Domain.Repositories;
using JobVacancies.API.Domain.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobVacancies.API.Services
{
    public class VacancyService : IVacancyService
    {
        private readonly IVacancyRepository _vacancyRepository;

        public VacancyService(IVacancyRepository vacancyRepository)
        {
            _vacancyRepository = vacancyRepository;
        }

        public Vacancy Add(Vacancy vacancy)
        {
            return _vacancyRepository.Add(vacancy);
        }

        public Vacancy GetById(int id)
        {
            return _vacancyRepository.GetById(id);
        }

        public async Task<IEnumerable<Vacancy>> ListVacanciesAsync()
        {
            return await _vacancyRepository.ListVacanciesAsync();
        }

        public async Task<IEnumerable<Vacancy>> ListVacanciesByCompaniesAsync(int companyId)
        {
            return await _vacancyRepository.ListVacanciesByCompanyAsync(companyId);
        }
    }
}
