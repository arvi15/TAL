using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TAL.InsuranceDemo.Services.Interfaces;

namespace TAL.InsuranceDemo.Services
{
    public class CalculateService : ICalculateService
    {
        private readonly ILogger<CalculateService> _logger;
        private readonly IMemmoryRepository _dataRepository;
        public CalculateService(ILogger<CalculateService> logger,
            IMemmoryRepository dataRepository)
        {
            _logger = logger;
            _dataRepository = dataRepository;
        }

        public double CalculateMonthlyPremium(double InsuredAmount, int age, string occupationId)
        {
            
            var rf = _dataRepository.getAllOccupationRatings().ToList();
            var occupationItem = _dataRepository.GetById(occupationId);
            if (occupationItem == null)
                throw new Exception("Occuppation Id doesnt exist");
             var rs=rf.FirstOrDefault(p=>p.Id== occupationItem.RatingID);
            return Math.Round((InsuredAmount * age * rs.ratingFactor) / (1000 * 12),2);
        }

     
        public double CalculateMonthlyPremiumDB(double InsuredAmount, int age, string occupationId)
        {
            throw new NotImplementedException();
        }
    }
}
