import { ValidatorFn, FormControl } from '@angular/forms';

export function NameAllowedValidator(allowedNames: string[]): ValidatorFn {

  return (control: FormControl): { [key: string]: any } | null => {

    const nameToTest = control.value
      ? (control.value as string).trim().toLowerCase()
      : '';
    const isNameAllowed = allowedNames.findIndex(name => name.toLowerCase() === nameToTest) !== -1;

    const validationResult = isNameAllowed ? null : {allowedNames: false} ;

    return validationResult;
  };

}
