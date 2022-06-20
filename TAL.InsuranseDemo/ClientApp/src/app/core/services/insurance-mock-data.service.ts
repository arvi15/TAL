import { Injectable } from '@angular/core';
import { OccupationRatings } from '../models/occupation-ratings.model';
import { Occupation } from '../models/occupation.model';

@Injectable({
  providedIn: 'root'
})
export class InsuranceMockDataService {

  constructor() { }
  ratingArray:OccupationRatings[]= [  
      
    {  
      id: 'rt01',        name : 'Professional',        ratingFactor: 1,       },   
      {       id: 'rt02',       name : 'White Collar',       ratingFactor: 1.25,      },
     {        id: 'rt03',        name : 'Light Manual',        ratingFactor:1.5,       }  ,
     {        id: 'rt04',        name : 'Heavy Manual',        ratingFactor: 1.75,       }  
    ]; 
    occupationarray:Occupation[]= [  
      {       id: 'Ng01', name : 'Cleaner',       rating: 'rt03',  },  
      {        id: 'Ng02',        name : 'Doctor',        rating: 'rt01',      },  
     {        id: 'Ng03',        name : 'Author',        rating: 'rt02',       }  ,
     {        id: 'Ng04',        name : 'Farmer',        rating: 'rt04',       }  ,
     {        id: 'Ng05',        name : 'Mechanic',        rating: 'rt04',       }  ,
     {        id: 'Ng06',        name : 'Florist',        rating: 'rt03',       }  ,
    ]; 
  public  getAllOccupations():Occupation[]
  {
    return this.occupationarray;
  }
  public  getAllRatings():OccupationRatings[]
  {
    return this.ratingArray;
  }
  public  getRatingValue(occupationID :string)
  {
  return this.ratingArray.find(r=>r.id== this.occupationarray.find(p=>p.id==occupationID).rating).ratingFactor;
  }
  
}
