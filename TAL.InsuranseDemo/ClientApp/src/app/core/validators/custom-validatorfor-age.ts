import { FormGroup, ValidatorFn } from "@angular/forms";

export class CustomValidatorforAge {

    public validatedoborAgeExist(): ValidatorFn {
       
      return (formGroup: FormGroup) => {
        let invalid =false;
        const ageControl = formGroup.get('age');
        const dobControl = formGroup.get('dob');
 
        if (!ageControl || !dobControl) {
            invalid= false;
        }
        const ageValue = ageControl.value;
      
        if (ageValue) {
            invalid= true;
        }
        const dobsValue = dobControl.value;
        if (dobsValue) {
            invalid= true;
        }
        return  invalid?null:{ isValidAge: false };
      };
    }
  }