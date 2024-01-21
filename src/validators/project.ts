import Joi, { ValidationResult } from 'joi';
import { createProjectDto } from '../interfaces/project.dto';

const createProjectSchema = Joi.object({
    user_id: Joi.number().min(1).max(255).required(),
    title: Joi.string().min(2).max(255).required(),
    description: Joi.string().min(2).max(2000).required(),
});
export const validateNewProject = (
    data: createProjectDto,
): ValidationResult => {
    return createProjectSchema.validate(data);
};
