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