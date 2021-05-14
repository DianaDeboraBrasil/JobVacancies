using JobVacancies.API.Domain.Models;
using JobVacancies.API.Domain.Repositories;
using JobVacancies.API.Domain.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobVacancies.API.Services
{
    public class CompanyService : ICompanyService
    {
        private readonly ICompanyRepository _companyRepository;

        public CompanyService(ICompanyRepository companyRepository)
        {
            _companyRepository = companyRepository;
        }

        public Company Add(Company company)
        {
            return _companyRepository.Add(company);
        }

        public Company GetById(int id)
        {
            return _companyRepository.GetById(id);
        }

        public async Task<IEnumerable<Company>> ListCompaniesAsync()
        {
            return await _companyRepository.ListCompaniesAsync();
        }
    }
}
