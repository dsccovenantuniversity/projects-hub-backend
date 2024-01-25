import Joi, { ValidationResult } from 'joi';
import { createVoteDto } from '../interfaces/vote.dto';
const createVoteSchema = Joi.object({
    userId: Joi.number().required(),
    projectId: Joi.number().required(),
    status: Joi.boolean().required(),
});
export const validateNewVote = (data: createVoteDto): ValidationResult => {
    return createVoteSchema.validate(data);
};
