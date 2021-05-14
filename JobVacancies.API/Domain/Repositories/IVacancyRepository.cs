using JobVacancies.API.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobVacancies.API.Domain.Repositories
{
    public interface IVacancyRepository
    {
        Task<IEnumerable<Vacancy>> ListVacanciesAsync();
        Task<IEnumerable<Vacancy>> ListVacanciesByCompanyAsync(int companyId);
        Vacancy GetById(int id);
        Vacancy Add(Vacancy vacancy);
    }
}
