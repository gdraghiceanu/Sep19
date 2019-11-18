import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { NameAllowedValidator } from '../validators/name-allowed.validator';

@Directive({
  selector: '[appNameAllowed]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NameAllowedDirective,
    multi: true
  }]
})
export class NameAllowedDirective implements Validator {

  @Input('appNameAllowed') nameAllowed: string[];

  validate(control: AbstractControl): ValidationErrors {
    return NameAllowedValidator(this.nameAllowed)(control);
  }


}
