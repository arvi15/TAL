import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Occupation } from 'src/app/core/models/occupation.model';
import { CalculatemonthlypremiumService } from 'src/app/core/services/calculatemonthlypremium.service';
import { InsuranceMockDataService } from 'src/app/core/services/insurance-mock-data.service';
import { CustomValidatorforAge } from 'src/app/core/validators/custom-validatorfor-age';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
occupatiopn:Occupation[];
result :string;
angForm: FormGroup;
numberRegEx = /\-?\d*\.?\d{1,2}/;
  date: string;
  
  result1:number;
constructor(private fb: FormBuilder,private insuranceMockDataService:InsuranceMockDataService
  ,private customValidatorforAge:CustomValidatorforAge
  ,private calculatemonthlypremiumService:CalculatemonthlypremiumService
  ) {
 this.createForm();
 
}
createForm() {
 this.angForm = this.fb.group({
    name: ['', Validators.required ],
    age: [''],
    dob: [''],
    insuranceamt: ['', Validators.required],
    occupation: [null, Validators.required ]
 },
 
    {
      validators: [this.customValidatorforAge.validatedoborAgeExist()],
      updateOn: 'blur',
    }
    );
}

  ngOnInit() {
    this.date = new Date().toISOString().slice(0, 10);
    this.occupatiopn =this.insuranceMockDataService.getAllOccupations();
  }
  onCalculate(){

    const formValue =  this.angForm.value;
    const Intage=0;

  

    this.result1 = this.calculatemonthlypremiumService.getpremium(
        formValue.insuranceamt,
        this.insuranceMockDataService.getRatingValue(formValue.occupation),
        formValue.age?formValue.age: this.getAge(new Date(formValue.dob))
       );
    this.result="your result is "+this.result1.toString();

 }
 onKeyPress($event: any,maxlength:number) {
if( $event.target.value){
  if($event.target.value.toString().length >maxlength)
  {
    event.preventDefault();
  }
}

 
}
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


