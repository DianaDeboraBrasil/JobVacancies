using JobVacancies.API.Domain.Models;
using JobVacancies.API.Domain.Repositories;
using JobVacancies.API.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobVacancies.API.Persistence.Repositories
{
    public class CompanyRepository : BaseRepository, ICompanyRepository
    {
        public CompanyRepository(AppDbContext context) : base(context)
        { }
        public Company Add(Company company)
        {
            try
            {
                _context.Company.Add(company);
                _context.SaveChanges();

                return company;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Company GetById(int id)
        {
            try
            {
                return _context.Company.Find(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<IEnumerable<Company>> ListCompaniesAsync()
        {
            return await _context.Company.ToListAsync();
        }
    }
}
