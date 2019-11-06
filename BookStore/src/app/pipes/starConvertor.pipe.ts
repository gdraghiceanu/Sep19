import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertor'
})
export class StarConvertPipe implements PipeTransform {

    transform(value: any) {
        switch(true) {
            case (value< 2):
                return 'low';
            case (value < 4):
                return 'average';
            case (value >= 4 && value <= 5):
                return 'high';
            default :
                return 'not in range';

        }
    }

}