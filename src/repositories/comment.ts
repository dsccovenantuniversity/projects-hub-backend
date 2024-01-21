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

