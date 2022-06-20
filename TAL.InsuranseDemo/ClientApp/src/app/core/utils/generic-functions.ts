export class GenericFunctions {
    getAge(dob:Date)
{
  
      const currDate = Date.now();
      let age:number =  new Date(currDate).getFullYear() -new Date(dob).getFullYear();
      let addYear=0;
      if(new Date(dob).getMonth()+1 > new Date(currDate).getMonth()+1 )
      {
         addYear=-1;
      }
      else if(new Date(dob).getMonth()+1 < new Date(currDate).getMonth()+1 ){
        addYear=0;
      }
      else if(new Date(dob).getDate() > new Date(currDate).getDate() ){
        addYear=-1;
      }
  return age+addYear;
  
}
}
