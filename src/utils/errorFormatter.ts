import { ValidationError } from 'joi';

export const joiFormatter = (rawError: ValidationError) => {
    const errors: any = {};
    const details: Array<any> = rawError.details;
    details.map((d: any) => {
        errors[d.path] = [d.message];
    });
    return errors;
};
