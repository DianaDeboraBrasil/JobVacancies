using JobVacancies.API.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobVacancies.API.Domain.Services
{
    public interface ICompanyService
    {
        Company Add(Company company);
        Company GetById(int id);
        Task<IEnumerable<Company>> ListCompaniesAsync();
    }
}
