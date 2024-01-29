import { Request, Response } from 'express';
import {
    createComment,
    deleteComment,
    getAllCommentsByProjectId,
    getSingleCommentByProjectId,
    updateComment,
} from '../repositories/comment';
import { responseHandler } from '../utils/reponseHandler';

export const createCommentController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const { userId, body } = req.body;
    const projectId = parseInt(req.params.id);
    const savedComment = createComment(userId, projectId, body);
    return res.status(200).json(responseHandler({ savedComment }));
};

export const getAllCommentsByProjectIdController = async (
    req: Request,
    res: Response,
) => {
    const { commentId } = req.body;
    const comments = await getAllCommentsByProjectId(commentId);
    return res.status(200).json(responseHandler({ comments }));
};
export const getSingleCommentByProjectIdController = async (
    req: Request,
    res: Response,
) => {
    const { commentId } = req.body;
    const project_id = parseInt(req.params.id);
    const comment = await getSingleCommentByProjectId(project_id, commentId);
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
