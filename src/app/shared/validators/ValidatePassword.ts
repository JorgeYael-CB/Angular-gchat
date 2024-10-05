import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function ValidatePassword(): ValidatorFn{
  return ( control: AbstractControl ):ValidationErrors | null => {
    const fieldPassword: string = control.value;

    if( fieldPassword.indexOf(' ') !== -1 ){
      return {
        passwordError: 'Cannot have empty spaces'
      }
    }

    if( fieldPassword.length <= 4 ){
      return {
        passwordError: 'Password is too short'
      }
    }

    if( fieldPassword.length >= 70 ){
      return {
        passwordError: 'Password is too long'
      }
    }

    return null;
  }
}
