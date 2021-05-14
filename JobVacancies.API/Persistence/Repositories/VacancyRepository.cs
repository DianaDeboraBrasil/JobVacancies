using JobVacancies.API.Domain.Models;
using JobVacancies.API.Domain.Repositories;
using JobVacancies.API.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobVacancies.API.Persistence.Repositories
{
    public class VacancyRepository : BaseRepository, IVacancyRepository
    {
        public VacancyRepository(AppDbContext context) : base(context)
        { }

        public Vacancy Add(Vacancy vacancy)
        {
            try
            {
                _context.Vacancy.Add(vacancy);
                _context.SaveChanges();

                return vacancy;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Vacancy GetById(int id)
        {
            try
            {
                return _context.Vacancy.Find(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<IEnumerable<Vacancy>> ListVacanciesAsync()
        {
            return await _context.Vacancy.ToListAsync();
        }

        public async Task<IEnumerable<Vacancy>> ListVacanciesByCompanyAsync(int companyId)
        {
            return await _context.Vacancy.Where(x => x.CompanyId == companyId).ToListAsync();
        }
    }
}
