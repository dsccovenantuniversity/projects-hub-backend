import { prisma } from '../config/prisma';
import { createCommentDto } from './dtos/comment.dto';

const createComment = async (commentData: createCommentDto) => {
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
        return comment;
    } catch (error) {
        return error;
    }
};
exports = { createComment };
