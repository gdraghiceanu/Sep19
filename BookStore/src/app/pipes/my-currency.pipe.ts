import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { identifierModuleUrl } from '@angular/compiler';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {

  newCode: string;

  constructor(private cp: CurrencyPipe) {}

  transform(value: number, code: string): string {

    if(code.toLocaleLowerCase() === 'euro'){
      this.newCode = 'EUR';
    }

    return this.cp.transform(value, this.newCode, 'symbol', '2.0-2');
  }

}
