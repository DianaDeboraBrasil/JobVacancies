using JobVacancies.API.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobVacancies.API.Domain.Services
{
    public interface IVacancyService
    {
        Vacancy Add(Vacancy vacancy);
        Vacancy GetById(int id);
        Task<IEnumerable<Vacancy>> ListVacanciesAsync();
        Task<IEnumerable<Vacancy>> ListVacanciesByCompaniesAsync(int companyId);
    }
}
