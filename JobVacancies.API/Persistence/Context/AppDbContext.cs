using JobVacancies.API.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace JobVacancies.API.Persistence.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Vacancy> Vacancy { get; set; }
        public DbSet<Company> Company { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Company>().ToTable("Companies");
            builder.Entity<Company>().HasKey(p => p.Id);
            builder.Entity<Company>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd().HasMaxLength(9);
            builder.Entity<Company>().Property(p => p.Name).IsRequired().HasMaxLength(50);
            builder.Entity<Company>().HasMany(p => p.Vacancies).WithOne(p => p.Company).HasForeignKey(p => p.CompanyId);

            //builder.Entity<Escola>().HasData(
            //    LoadJsonData()
            //);

            builder.Entity<Vacancy>().ToTable("Vacancies");
            builder.Entity<Vacancy>().HasKey(p => p.Id);
            builder.Entity<Vacancy>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd().HasMaxLength(9);
            builder.Entity<Vacancy>().Property(p => p.Name).IsRequired().HasMaxLength(50);
            builder.Entity<Vacancy>().Property(p => p.Description).IsRequired().HasMaxLength(150);
        }
    }
}
