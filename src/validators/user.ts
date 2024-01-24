import Joi, { ValidationResult } from 'joi';
import { createUserDto } from '../interfaces/user.dto';

const updateUserSchema = Joi.object({
    first_name: Joi.string().min(2).max(255).required(),
    last_name: Joi.string().min(2).max(255).required(),
    email: Joi.string().email().max(255).required(),
    username: Joi.string().min(2).max(255).required(),
});

export const validateUpdatedUser = (data: any): ValidationResult => {
    return updateUserSchema.validate(data);
};
