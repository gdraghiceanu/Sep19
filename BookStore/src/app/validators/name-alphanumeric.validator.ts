import { ValidatorFn, FormControl } from '@angular/forms';

export function NameAlphanumericValidator(): ValidatorFn {

    return (control: FormControl): { [key: string]: any } | null => {

        const nameToTest = control.value ? (control.value as string).trim()  : '';

        const isValid = /^[a-zA-Z0-9 ]*$/.test(nameToTest);
        if (isValid) {
            return null;
        } else {
            return {
                nameAlphanumeric: {
                    valid: false
                }
            };
        }
    };

}
