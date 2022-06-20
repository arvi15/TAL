import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { CalculateRequestObject } from '../models/calculate-request-object.model';

@Injectable({
  providedIn: 'root'
})
export class CalculatemonthlypremiumService {

  constructor(private http: HttpClient,  @Inject('BASE_URL') private baseUrl: string) { }
        getpremium(dcamount :number,orf:number,age:number){
        return (dcamount*orf*age)/12000;
  }


  getpremiumFromServer(calculateRequestObject:CalculateRequestObject){
   return  this.http.post<CalculateRequestObject>(this.baseUrl + 'api/Calculation/Calculate',calculateRequestObject)
   .pipe(
    map((data) => {
      //You can perform some transformation here
      console.log('in map');
      console.log(data);
     return data;
   }),
   catchError((err) => {
     console.error(err);
     throw err;
   }
 ));
  
  }
}
