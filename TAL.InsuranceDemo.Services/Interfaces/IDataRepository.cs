using System;
using System.Collections.Generic;
using System.Text;
using TAL.Insurance.Entities;

namespace TAL.InsuranceDemo.Services.Interfaces
{
  
    public interface IDataRepository<T> where T : class
    {
        IEnumerable<T> getAll();
        T GetById(string id);
    }
}
