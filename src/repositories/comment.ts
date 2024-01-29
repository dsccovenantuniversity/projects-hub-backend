import { prisma } from '../config/prisma';
import { updateCommentByIdDto } from '../interfaces/comment.dto';

export const createComment = async (
    userId: number,
    projectId: number,
    body: string,
) => {
    return await prisma.comments.create({
        data: {
            body,
            user: {
                connect: { id: userId },
            },
            project: {
                connect: { id: projectId },
            },
        },
    });
};

export const getAllCommentsByProjectId = async (project_id: number) => {
    const comments = await prisma.comments.findMany({
        where: {
            project_id,
        },
    });
    return comments;
};

export const getSingleCommentByProjectId = async (
    project_id: number,
    commentId: number,
) => {
    const comment = await prisma.comments.findFirst({
        where: {
            project_id,
            id: commentId,
        },
    });
    return comment;
};

export const updateComment = async (data: updateCommentByIdDto) => {
    const currentDate = new Date();
    const comment = await prisma.comments.update({
        where: {
            id: data.commentId,
        },
        data: {
            body: data.body,
            updated_at: new Date(currentDate.getTime() + 60 * 60 * 1000),
        },
    });
    return comment;
};

export const deleteComment = async (commentId: number) => {
    const comment = await prisma.comments.delete({
        where: {
            id: commentId,
        },
    });
    return comment;
};
