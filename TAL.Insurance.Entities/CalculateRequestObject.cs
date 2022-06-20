using System;
using System.Collections.Generic;
using System.Text;

namespace TAL.Insurance.Entities
{
   public  class CalculateRequestObject
    {
        public int Age{ get; set; }
        public double InsuredAmount{ get; set; }
        public string OccupationId { get; set; }
        public string RatingId { get; set; }
    }
}
