import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { NameNotAllowedValidator } from '../validators/name-not-allowed.validator';

@Directive({
  selector: '[appNameNotAllowed]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NameNotAllowedDirective,
    multi: true
  }]
})
export class NameNotAllowedDirective implements Validator {

  @Input('appNameNotAllowed') nameNotAllowed: string[];

  validate(control: AbstractControl): ValidationErrors {
    return NameNotAllowedValidator(this.nameNotAllowed)(control);
  }


}
