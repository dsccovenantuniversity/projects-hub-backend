import { prisma } from "../config/prisma";
import { createVoteDto } from "../interfaces/vote.dto";

export const createVote = async (data: createVoteDto) => {
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
    } 
    export const updateVote = async (id: number, status: boolean) => {
            const currentDate = new Date();
            const vote = await prisma.votes.update({
                where: {
                    id: id,
                },
                data: {
                    up: status,
                    updated_at: new Date(currentDate.getTime() + 60 * 60 * 1000),
                },
            });
            return vote;
    };