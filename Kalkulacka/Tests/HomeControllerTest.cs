using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Kalkulacka.Controllers;
using Kalkulacka.Data;
using Xunit;

namespace Kalkulacka.Tests
{
    public class HomeControllerTests
    {
        private readonly ApplicationDbContext _context;
        private readonly HomeController _controller;

        public HomeControllerTests()
        {
            // Nastavení in-memory databáze pro testování
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase")
                .Options;

            _context = new ApplicationDbContext(options);

            // Seed dat pro testování
            if (!_context.Calculation.Any())
            {
                _context.Calculation.AddRange(
                    new Calculation { Id = 1, Computing = "2 + 2 = 4", Result = "4", CreatedOn = DateTime.Now.AddSeconds(-3) },
                    new Calculation { Id = 3, Computing = "2 * 2 = 4", Result = "16", CreatedOn = DateTime.Now.AddSeconds(-2) },
                    new Calculation { Id = 2, Computing = "2 - 2 = 0", Result = "0", CreatedOn = DateTime.Now.AddSeconds(-1) }
                );
                _context.SaveChanges();
            }

            _controller = new HomeController(_context);
        }

        [Fact]
        public void GetCalculations_ReturnsOkResult_WithListOfCalculations()
        {
            var result = _controller.GetListCalculations();

            var okResult = Assert.IsType<OkObjectResult>(result);
            var calculations = Assert.IsAssignableFrom<IEnumerable<Calculation>>(okResult.Value);
            Assert.True(calculations.Count() <= 10);
            Assert.Equal("2 - 2 = 0", calculations.First().Computing); // Assuming this was the latest calculation
        }

        [Fact]
        public void PostCalculation_ReturnsCreatedAtActionResult()
        {
            var newCalculation = new Calculation { Id = 4, Computing = "4 * 4 = 16", Result = "16" };

            var result = _controller.SaveCalculation(newCalculation);

            var okResult = Assert.IsType<OkObjectResult>(result);
            var resultObject = Assert.IsType<Calculation>(okResult.Value);

            Assert.Equal(4, resultObject.Id);
            Assert.Equal("4 * 4 = 16", resultObject.Computing);
            Assert.Equal("16", resultObject.Result);
            _context.Calculation.Remove(newCalculation);
            _context.SaveChanges();
        }
    }
}
