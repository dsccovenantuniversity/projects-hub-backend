import Joi, { ValidationResult } from 'joi';
import { updateUserDetailsDto } from '../interfaces/user.dto';

const updateUserSchema = Joi.object({
    first_name: Joi.string().min(2).max(255).optional(),
    last_name: Joi.string().min(2).max(255).optional(),
    email: Joi.string().email().max(255).optional(),
    username: Joi.string().min(2).max(255).optional(),
});

export const validateUpdatedUser = (
    data: updateUserDetailsDto,
): ValidationResult => {
    return updateUserSchema.validate(data, { abortEarly: false });
};
