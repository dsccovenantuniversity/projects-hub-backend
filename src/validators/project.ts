import Joi, { ValidationResult } from 'joi';
import { createProjectDto } from '../interfaces/project.dto';

const createProjectSchema = Joi.object({
    user_id: Joi.number().min(1).max(255).required(),
    title: Joi.string().min(2).max(255).required(),
    description: Joi.string().min(2).max(2000).required(),
    image_links: Joi.array()
        .items(Joi.string().min(1).max(255).optional())
        .required(),
    tags: Joi.array().items(Joi.string().min(1).max(255).optional()).required(),
    accepting_collaborators: Joi.boolean().default(false).required(),
});

export const validateNewProject = (
    data: createProjectDto,
): ValidationResult => {
    return createProjectSchema.validate(data, { abortEarly: false });
};

const updatedProjectSchema = Joi.object({
    user_id: Joi.number().min(1).max(255).optional(),
    title: Joi.string().min(2).max(255).optional(),
    description: Joi.string().min(2).max(2000).optional(),
    image_links: Joi.array()
        .items(Joi.string().min(1).max(255).optional())
        .optional(),
    tags: Joi.array().items(Joi.string().min(1).max(255).optional()).optional(),
    accepting_collaborators: Joi.boolean().default(false).optional(),
});

export const validateUpdatedProject = (
    data: createProjectDto,
): ValidationResult => {
    return updatedProjectSchema.validate(data, { abortEarly: false });
};
