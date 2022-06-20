using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAL.Insurance.Entities;
using TAL.InsuranceDemo.Services.Interfaces;

namespace TAL.InsuranseDemo.Controllers
{
   
    public class CalculationController : ControllerBase
    {
        private readonly ILogger<CalculationController> _logger;

        private readonly ICalculateService _dataRepository;
        public CalculationController(ILogger<CalculationController> logger,
            ICalculateService dataRepository)
        {
            _logger = logger;
            _dataRepository = dataRepository;
        }
        //calculate mmonthly totalamt age occupation -- get thew grade from locallist
        //calculate mmonthly totalamt age occupation -- get the grade from db list
        [HttpPost]
        [Route("api/[controller]/Calculate")]
        public  IActionResult getAllOccupationAsync([FromBody] CalculateRequestObject request)
        {

           var result = _dataRepository.CalculateMonthlyPremium(request.InsuredAmount, request.Age, request.OccupationId);
           return Ok(result);
        }
    }
}
