import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, AbstractControl } from '@angular/forms';
import {  NameAlphanumericValidator } from '../validators/name-alphanumeric.validator';

@Directive({
  selector: '[appNameAlphanumeric]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NameAlphanumericDirective,
    multi: true
  }]
})
export class NameAlphanumericDirective implements Validator {

  @Input('appNameAlphanumeric') nameAlphanumeric: string;

  validate(control: AbstractControl): ValidationErrors {
    return NameAlphanumericValidator ()(control);
  }


}
