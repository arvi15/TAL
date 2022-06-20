using System.Collections.Generic;
using TAL.Insurance.Entities;

namespace TAL.InsuranceDemo.Services
{
    public interface IMemmoryRepository
    {
        IEnumerable<Occupation> getAllOccupation();
        IEnumerable<OccupationRatings> getAllOccupationRatings();
        Occupation GetById(string Id);
        OccupationRatings getOccupationRatings(string Id);
    }
}