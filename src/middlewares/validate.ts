import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { joiFormatter } from '../utils/errorFormatter';

type ValidatorFunction = (input: any) => { error?: Joi.ValidationError };

export const validate = (validator: ValidatorFunction) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = validator(req.body);
        if (error) {
            const joiError = joiFormatter(error);
            return res.status(400).json({
                status: false,
                message: 'Validation Error. Try to adjust provided data',
                data: null,
                error: {
                    name: error.name,
                    info: joiError,
                },
            });
        }
        next();
    };
};
