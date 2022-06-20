using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAL.Insurance.Entities;
using TAL.InsuranceDemo.Services;
using TAL.InsuranceDemo.Services.Interfaces;

namespace TAL.InsuranseDemo.Controllers
{
   
    [ApiController]
    public class OccupationController : ControllerBase
    {
        private readonly ILogger<OccupationController> _logger;

        private readonly IMemmoryRepository _dataRepository;
        public OccupationController(ILogger<OccupationController> logger,
            IMemmoryRepository dataRepository)
        {
            _logger = logger;
            _dataRepository = dataRepository;
        }
        [HttpGet]
        [Route("api/[controller]/List")]
        public IEnumerable<Occupation> getAllOccupation()
        {
           
            return _dataRepository.getAllOccupation()
            .ToArray();
        }

    }
}
