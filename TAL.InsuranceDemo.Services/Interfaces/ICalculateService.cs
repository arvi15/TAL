using System;
using System.Collections.Generic;
using System.Text;

namespace TAL.InsuranceDemo.Services.Interfaces
{
   public  interface ICalculateService
    {
       double CalculateMonthlyPremium(double InsuredAmount, int age,string occupationId);
        double CalculateMonthlyPremiumDB(double InsuredAmount, int age, string occupationId);
    }
}
