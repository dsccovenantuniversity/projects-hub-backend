import { Request, Response } from 'express';
import { prisma } from '../config/prisma';
import { updateCommentByIdDto } from '../interfaces/comment.dto';
import { validateNewComment } from '../validators/comment';
import {
    createComment,
    getCommentByProjectId,
    updateComment,
} from '../repositories/comment';
import { responseHandler } from '../utils/reponseHandler';

export const createCommentController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const { userId, projectId, body } = req.body;

    const { error } = validateNewComment({ userId, projectId, body });
    if (error) {
        return res
            .status(400)
            .json({ success: false, message: error.details[0].message });
    }

    const savedComment = createComment(userId, projectId, body);
    return res.status(200).json(responseHandler({ savedComment }));
};

export const deleteComment = async (id: number) => {
    try {
        const comment = await prisma.comments.delete({
            where: {
                id: id,
            },
        });
        return comment;
    } catch (error) {
        return error;
    }
};
