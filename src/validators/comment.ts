import Joi, { ValidationResult } from 'joi';
import {
    createCommentDto,
    updateCommentByIdDto,
} from '../interfaces/comment.dto';

const createCommentSchema = Joi.object({
    userId: Joi.number().required(),
    body: Joi.string().min(2).max(2000).required(),
});

const updateCommentSchema = Joi.object({
    commentId: Joi.number().required(),
    body: Joi.string().min(2).max(2000).required(),
});

export const validateNewComment = (
    data: createCommentDto,
): ValidationResult => {
    return createCommentSchema.validate(data, { abortEarly: false });
};

export const validateUpdatedComment = (
    data: updateCommentByIdDto,
): ValidationResult => {
    return updateCommentSchema.validate(data, { abortEarly: false });
};
