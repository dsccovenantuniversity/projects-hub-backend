import { prisma } from '../config/prisma';
import { createCommentDto, updateCommentByIdDto } from './dtos/comment.dto';

export const createComment = async (commentData: createCommentDto) => {
    const body = commentData.body;
    try {
        const comment = await prisma.comments.create({
            data: {
                body,
                user: {
                    connect: { id: commentData.userId },
                },
                project: {
                    connect: { id: commentData.projectId },
                },
            },
        });
        console.log(comment);
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
