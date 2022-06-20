import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculateRequestObject } from 'src/app/core/models/calculate-request-object.model';
import { Occupation } from 'src/app/core/models/occupation.model';
import { CalculatemonthlypremiumService } from 'src/app/core/services/calculatemonthlypremium.service';
import { insuranceDataService } from 'src/app/core/services/insurance-data-service.service';
import { GenericFunctions } from 'src/app/core/utils/generic-functions';
import { CustomValidatorforAge } from 'src/app/core/validators/custom-validatorfor-age';

@Component({
  selector: 'app-calculate-server',
  templateUrl: './calculate-server.component.html',
  styleUrls: ['./calculate-server.component.css']
})
export class CalculateServerComponent implements OnInit {
occupatiopn:Occupation[];
result :string;
res :any;
angForm: FormGroup;
numberRegEx = /\-?\d*\.?\d{1,2}/;
  date: string;
  
  result1:any;

constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string,
  private fb: FormBuilder,private insuranceDataService:insuranceDataService
  ,private customValidatorforAge:CustomValidatorforAge
  ,private calculatemonthlypremiumService:CalculatemonthlypremiumService
  ,private genericFunctions:GenericFunctions
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

  async ngOnInit() {
    this.date = new Date().toISOString().slice(0, 10);
     this.insuranceDataService.getAllOccupations()
                    .subscribe(p=>{console.log('response');
                    this.occupatiopn=p;
    console.log(p)}
    )
    ;


  }
  onCalculate(){

    const formValue =  this.angForm.value;
    const Intage=0;

  
    let calculateRequestObject:CalculateRequestObject={
      age:formValue.age?formValue.age: this.genericFunctions.getAge(new Date(formValue.dob)),
      insuredAmount: formValue.insuranceamt,
      occupationID:formValue.occupation
    };
    this.result1 = this.calculatemonthlypremiumService.getpremiumFromServer
      (calculateRequestObject)
      .subscribe(p=>{console.log('response');
      this.res=p;
      console.log(p)}
      )
      ;
       console.log( this.result1 );
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


}


