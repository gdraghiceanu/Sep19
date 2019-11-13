import { ValidatorFn, FormControl } from '@angular/forms';

export function NameNotAllowedValidator(forbiddenNames: string[]): ValidatorFn {
  return (control: FormControl): { [key: string]: any } | null => {
    const nameToTest = control.value
      ? (control.value as string).trim().toLowerCase()
      : '';
    const isNameAllowed =
      forbiddenNames.findIndex(name => name.toLowerCase() === nameToTest) ===
      -1;
    const validationResult = isNameAllowed ? null : { nameNotAllowed: true };
    return validationResult;
  };
}
