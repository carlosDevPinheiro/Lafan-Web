import { FormControl } from '@angular/forms';

export class PersonalValidators {

    static EmailValidator(control: FormControl) {
        var reValEmail = /^([a-z].*\w+)@.*(\.com(.br)?|.net)$/;
        if (!reValEmail.test(control.value)) {
            return { "Email Invalido": true }
        }

        return null;       
    }

    
}