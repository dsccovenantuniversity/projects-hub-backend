import { prisma } from '../config/prisma';
import { createVoteDto } from './dtos/vote.dto';

export const createVote = async (data: createVoteDto) => {
    try {
        const vote = await prisma.votes.create({
            data: {
                user: {
                    connect: { id: data.userId },
                },
                project: {
                    connect: { id: data.projectId },
                },
                up: data.status,
            },
        });
        return vote;
    } catch (error) {
        return error;
    }
};
export const deleteVote = async (id: number) => {
    try {
        const vote = await prisma.votes.delete({
            where: {
                id: id,
            },
        });
        return vote;
    } catch (error) {
        return error;
    }
};
createVote({ userId: 28, projectId: 1, status: true });
