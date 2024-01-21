import Joi, { ValidationResult } from 'joi';
import { createUserDto } from '../interfaces/user.dto';
const createUserSchema = Joi.object({
    first_name: Joi.string().min(2).max(255).required(),
    last_name: Joi.string().min(2).max(255).required(),
    email: Joi.string().email().max(255).required(),
    username: Joi.string().min(2).max(255).required(),
    google_provider_id: Joi.string().required(),
});
const updateUserSchema = Joi.object({
    first_name: Joi.string().min(2).max(255).required(),
    last_name: Joi.string().min(2).max(255).required(),
    email: Joi.string().email().max(255).required(),
    username: Joi.string().min(2).max(255).required(),
});
export const validateNewUser = (data: createUserDto): ValidationResult => {
    return createUserSchema.validate(data);
};
export const validateUpdatedUser = (data: createUserDto): ValidationResult => {
    return updateUserSchema.validate(data);
};
