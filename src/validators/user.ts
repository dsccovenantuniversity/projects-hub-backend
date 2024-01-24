import Joi, { ValidationResult } from 'joi';
import { createUserDto } from '../interfaces/user.dto';

const updateUserSchema = Joi.object({
    first_name: Joi.string().min(2).max(255),
    last_name: Joi.string().min(2).max(255),
    email: Joi.string().email().max(255),
    username: Joi.string().min(2).max(255),
});

export const validateUpdatedUser = (data: any): ValidationResult => {
    return updateUserSchema.validate(data);
};
