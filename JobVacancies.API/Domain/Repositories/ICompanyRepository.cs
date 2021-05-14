using JobVacancies.API.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobVacancies.API.Domain.Repositories
{
    public interface ICompanyRepository
    {
        Task<IEnumerable<Company>> ListCompaniesAsync();
        Company GetById(int id);
        Company Add(Company company);
    }
}
