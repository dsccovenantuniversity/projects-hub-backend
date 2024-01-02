import { prisma } from '../config/prisma';
import { createCommentDto, updateCommentByIdDto } from './dtos/comment.dto';

export const createComment = async (data: createCommentDto) => {
    const body = data.body;
    try {
        const comment = await prisma.comments.create({
            data: {
                body,
                user: {
                    connect: { id: data.userId },
                },
                project: {
                    connect: { id: data.projectId },
                },
            },
        });
        return comment;
    } catch (error) {
        return error;
    }
};
export const getCommentByProjectId = async (id: number) => {
    const comments = await prisma.comments.findMany({
        where: {
            project_id: id,
        },
    });
    return comments;
};
export const updateComment = async (data: updateCommentByIdDto) => {
    try {
        const comment = await prisma.comments.update({
            where: {
                id: data.commentId,
            },
            data: {
                body: data.body,
            },
        });
        return comment;
    } catch (error) {
        return error;
    }
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
