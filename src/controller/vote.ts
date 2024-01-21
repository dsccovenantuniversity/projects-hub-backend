import { validateNewVote } from '../validators/vote';
import { prisma } from '../config/prisma';
import { responseHandler } from '../utils/reponseHandler';
import { Request, Response } from 'express';
import { createVote, updateVote } from '../repositories/vote';

export const createVoteController =async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const { userId, projectId, status } = req.body;

    const { error } = validateNewVote({ userId, projectId, status });
    if (error) {
        return res
            .status(400)
            .json({ success: false, message: error.details[0].message });
    }

    const savedVote = createVote({userId, projectId, status});
    return res.status(200).json(responseHandler({ savedVote }));

};
export const updateVoteController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const { voteId, status } = req.body;
    const vote = await updateVote(voteId, status);
    return res.status(200).json(responseHandler({ vote }));
};
