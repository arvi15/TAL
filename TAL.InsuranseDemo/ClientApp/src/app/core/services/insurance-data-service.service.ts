import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Occupation } from '../models/occupation.model';

@Injectable({
  providedIn: 'root'
})
export class insuranceDataService {
  
  occupation:Occupation[];
  constructor(private http: HttpClient,  @Inject('BASE_URL') private baseUrl: string) { }
  public  getAllOccupations()
  {
    console.log(this.baseUrl);
return  this.http.get<Occupation[]>(this.baseUrl + 'api/Occupation/List')
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
// .subscribe(result => {
//   console.log(result);
//  this.occupation = result;
// }, error => console.error(error));

   
  }
  
  getRatingValue(occupation: any): number {
    throw new Error('Method not implemented.');
  }
}
