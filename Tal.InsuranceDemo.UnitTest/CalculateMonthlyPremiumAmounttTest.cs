using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Logging;
using NSubstitute;
using TAL.Insurance.Entities;
using TAL.InsuranceDemo.Services;
using TAL.InsuranceDemo.Services.Interfaces;
using Xunit;

namespace Tal.InsuranceDemo.UnitTest
{
    public class CalculateMonthlyPremiumAmounttTest
    {
        private readonly ILogger<CalculateService> _logger;
        private readonly IMemmoryRepository _dataRepository;
        private readonly ICalculateService _calculateService;


        private static List<Occupation>  initData=new List<Occupation>()
        {
            new Occupation{Id="Ng01",Name="Cleaner",RatingID="rt03"},
            new Occupation{Id="Ng02",Name="Doctor",RatingID="rt01"},
            new Occupation { Id = "Ng03", Name = "Author", RatingID = "rt02" },
            new Occupation { Id = "Ng04", Name = "Farmer", RatingID = "rt04" },
            new Occupation { Id = "Ng05", Name = "Mechanic", RatingID = "rt04" },
            new Occupation { Id = "Ng06", Name = "Florist", RatingID = "rt03" },
        };
        private static List<OccupationRatings> initRatingData =
            new List<OccupationRatings>()
        {
            new OccupationRatings{Id="rt01",Name="Professional",ratingFactor=1},
            new OccupationRatings{Id="rt02",Name="White Collar",ratingFactor=1.25},
            new OccupationRatings { Id = "rt03", Name = "Light Manual", ratingFactor = 1.5 },
            new OccupationRatings { Id = "rt04", Name = "Heavy Manual", ratingFactor = 1.75 },
         
        };
        public static IEnumerable<object[]> GetSuccessData()
        {
            yield return new object[] { 10000,40, "Ng01", initData.ElementAt(0),50 };
            yield return new object[] { 10000,40, "Ng02", initData.ElementAt(1) ,33.33};
            yield return new object[] { 10000, 40, "Ng03", initData.ElementAt(2),41.67 };
            yield return new object[] { 10000, 40, "Ng04", initData.ElementAt(3),58.33 };
            yield return new object[] { 10000, 40, "Ng05", initData.ElementAt(4),58.33 };
            yield return new object[] { 10000, 40, "Ng06", initData.ElementAt(5),50 };
        }
        public static IEnumerable<object[]> GetFailData()
        {
            yield return new object[] { 100000, 40, "Ng04", initData.ElementAt(3), 58.33 };
            yield return new object[] { 100000, 40, "Ng05", initData.ElementAt(4), 58.33 };
            yield return new object[] { 100000, 40, "Ng06", initData.ElementAt(5), 50 };
        }
        public CalculateMonthlyPremiumAmounttTest()
        {
            _logger = Substitute.For<ILogger<CalculateService>>();
            _dataRepository= Substitute.For<IMemmoryRepository>();
            _calculateService = new CalculateService(_logger,_dataRepository);
            _dataRepository.getAllOccupation()
                .Returns(initData);
            _dataRepository.getAllOccupationRatings()
                .Returns(initRatingData);
           

        }

        

        [Theory]
        [MemberData(nameof(GetSuccessData))]
        public void Test_CalculateMonthlyPremium_List_Success(double insureAmount,int age,
            string occupationId ,
            Occupation occupation,double expectedResult)
        {

            _dataRepository.GetById(Arg.Any<string>()).Returns(occupation);
            var actualResult = _calculateService.CalculateMonthlyPremium(insureAmount, age, occupationId);
            Assert.Equal(expectedResult, actualResult);
        }
        [Theory]
        [MemberData(nameof(GetFailData))]
        public void Test_CalculateMonthlyPremium_List_Fail(double insureAmount, int age,
           string occupationId,
           Occupation occupation, double expectedResult)
        {

            _dataRepository.GetById(Arg.Any<string>()).Returns(occupation);
            var result = _calculateService.CalculateMonthlyPremium(insureAmount, age, occupationId);
            Assert.NotEqual(expectedResult, result);
        }
        [Fact]
        public void Test_CalculateMonthlyPremium_Success()
        {

            double insureAmount = 15000;
            int age = 45;
            string occupationId = "Ng02";
            _dataRepository.GetById(Arg.Any<string>()).Returns(x => new Occupation { Id = "Ng02", Name = "Doctor", RatingID = "rt01" });
            var result = _calculateService.CalculateMonthlyPremium(insureAmount, age, occupationId);
            Assert.Equal(56.25, result);
        }
        [Fact]
        public void Test_CalculateMonthlyPremium_Fail()
        {
            double insureAmount = 15000;
            int age = 22;
            string occupationId = "Ng01";
            _dataRepository.GetById(Arg.Any<string>()).Returns(x => new Occupation { Id = "Ng01", Name = "Doctor", RatingID = "rt01" });
            var result = _calculateService.CalculateMonthlyPremium(insureAmount, age, occupationId);
            Assert.NotEqual(56.25, result);
        }
    }
}
