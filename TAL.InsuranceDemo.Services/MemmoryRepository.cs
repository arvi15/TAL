using System.Collections.Generic;
using System.Linq;
using TAL.Insurance.Entities;
using TAL.InsuranceDemo.Services.Interfaces;

namespace TAL.InsuranceDemo.Services
{
    public class MemmoryRepository :  IMemmoryRepository
    {

        public IEnumerable<Occupation> getAllOccupation()
        {

            return new List<Occupation>()
        {
            new Occupation{Id="Ng01",Name="Cleanera",RatingID="rt03"},
            new Occupation{Id="Ng02",Name="Doctora",RatingID="rt01"},
            new Occupation{Id="Ng03",Name="Author",RatingID="rt02"},
            new Occupation{Id="Ng04",Name="Farmer",RatingID="rt04"},
            new Occupation{Id="Ng05",Name="Mechanic",RatingID="rt04"},
            new Occupation{Id="Ng06",Name="Florist",RatingID="rt03"},
        };
        }
        public Occupation GetById(string Id)
        {
            return getAllOccupation().ToList().FirstOrDefault(p => p.Id == Id);
        }
        public IEnumerable<OccupationRatings> getAllOccupationRatings()
        {

            return new List<OccupationRatings>()
        {
            new OccupationRatings{Id="rt01",Name="Professional",ratingFactor=1},
            new OccupationRatings{Id="rt02",Name="White Collar",ratingFactor=1.25},
            new OccupationRatings{Id="rt03",Name="Light Manual",ratingFactor=1.5},
            new OccupationRatings{Id="rt04",Name="Heavy Manual",ratingFactor=1.75},
         
        };
        }
        public OccupationRatings getOccupationRatings(string Id)
        {
            return getAllOccupationRatings().ToList().FirstOrDefault(p => p.Id == Id);
        }
    }
}
