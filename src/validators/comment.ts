import Joi, { ValidationResult } from 'joi';
import { createCommentDto } from '../interfaces/comment.dto';
const createCommentSchema = Joi.object({
    userId: Joi.number().required(),
    projectId: Joi.number().required(),
    status: Joi.boolean().required(),
});
export const validateNewComment = (
    data: createCommentDto,
): ValidationResult => {
    return createCommentSchema.validate(data);
};
