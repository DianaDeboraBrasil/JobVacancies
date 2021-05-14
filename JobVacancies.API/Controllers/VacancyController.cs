using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using JobVacancies.API.Domain.Models;
using JobVacancies.API.Domain.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobVacancies.API.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class VacancyController : ControllerBase
    {
        private readonly IVacancyService _VacancyService;

        public VacancyController(IVacancyService VacancyService)
        {
            _VacancyService = VacancyService;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<IEnumerable<Vacancy>>> GetAllAsync()
        {
            try
            {
                return Ok(await _VacancyService.ListVacanciesAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("Company/{companyId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<IEnumerable<Vacancy>>> GetAllByCompanyAsync([FromRoute] int companyId)
        {
            try
            {
                var vacancies = await _VacancyService.ListVacanciesByCompaniesAsync(companyId);

                if (vacancies == null)
                    return NotFound("No vacancies found for the company provided!");

                return Ok(vacancies);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Vacancy> GetById([FromRoute] int id)
        {
            try
            {
                var vacancy = _VacancyService.GetById(id);

                if (vacancy == null)
                    return NotFound("Vacancy not found!");

                return Ok(vacancy);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Vacancy> Add([FromBody] Vacancy vacancy)
        {
            try
            {
                return Ok(_VacancyService.Add(vacancy));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
