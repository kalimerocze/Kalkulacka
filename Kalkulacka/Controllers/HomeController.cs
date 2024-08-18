using Kalkulacka.Data;
using log4net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace Kalkulacka.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _context;
        private static readonly ILog log = LogManager.GetLogger(typeof(HomeController));

        public HomeController(ApplicationDbContext context)
        {
            _context = context;
        }
        /// <summary>
        /// Saves result of calculator to db
        /// </summary>
        /// <param name="data"> data contains calculations, date of creation, inputs </param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult SaveCalculation(Calculation data)
        {
            if (data == null)
            {
                return BadRequest("Invalid data.");
            }

            _context.Calculation.Add(data);
            _context.SaveChanges();
            return Ok(data);
        }
        /// <summary>
        /// Returns 10 last results of Calculations from Db
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult GetListCalculations()
        {
            var result = _context.Calculation.ToList().OrderByDescending(e => e.CreatedOn).Take(10);
            return Ok(result);
        }

        /// <summary>
        /// Saves error into a file
        /// </summary>
        /// <param name="errorObject"></param>
        /// <returns></returns>
        [HttpPost("Error")]
        public IActionResult LogErrorMessage(ErrorMessage errorObject)
        {
            log.Error("Error has appeared in calculator app." + errorObject.Message);
            return Ok();
        }
    }
}