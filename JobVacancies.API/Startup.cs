using JobVacancies.API.Domain.Repositories;
using JobVacancies.API.Domain.Services;
using JobVacancies.API.Helper;
using JobVacancies.API.Persistence.Context;
using JobVacancies.API.Persistence.Repositories;
using JobVacancies.API.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace JobVacancies.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public IConfigurationSection AppSettings { get; private set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddHttpClient();
            services.AddControllers().AddNewtonsoftJson().AddJsonOptions(options =>
                                                    {
                                                        options.JsonSerializerOptions.IgnoreNullValues = true;
                                                    });

            services.AddCors();

            services.AddDbContext<AppDbContext>(options =>
            {
                options.UseInMemoryDatabase("client-api-in-memory");
            });

            AppSettings = Configuration.GetSection("AppSettings");

            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo { Title = "Job Vacancies Api", Version = "v1" });

                options.EnableAnnotations();
            });

            services.AddTransient<ICompanyRepository, CompanyRepository>();
            services.AddScoped<ICompanyService, CompanyService>();

            services.AddTransient<IVacancyRepository, VacancyRepository>();
            services.AddScoped<IVacancyService, VacancyService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseRouting();

            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.RoutePrefix = AppSettingsHelper.Get("Swagger", "RoutePrefix");
                c.SwaggerEndpoint($"{AppSettingsHelper.Get("Swagger", "Version")}/swagger.json", AppSettingsHelper.Get("Swagger", "Title"));
            });
        }
    }
}
