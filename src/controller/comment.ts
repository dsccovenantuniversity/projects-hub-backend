import { Request, Response } from 'express';
import { prisma } from '../config/prisma';
import { updateCommentByIdDto } from '../interfaces/comment.dto';
import { validateNewComment } from '../validators/comment';
import {
    createComment,
    deleteComment,
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

export const getCommentByProjectIdController = async (
    req: Request,
    res: Response,
) => {
    const { commentId } = req.body;
    const comment = await getCommentByProjectId(commentId);
    return res.status(200).json(responseHandler({ comment }));
};

export const updateCommentController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const { commentId, body } = req.body;
    const comment = await updateComment({ commentId, body });
    return res.status(200).json(responseHandler({ comment }));
};

export const deleteCommentController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const { commentId } = req.body;
    const comment = await deleteComment(commentId);
    return res.status(200).json(responseHandler({ comment }));
};
