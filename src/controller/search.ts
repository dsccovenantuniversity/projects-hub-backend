import { prisma } from '../config/prisma';

export const searchAllUsers = async (searchQuery: string) => {
    //gets all users' and sends only the username
    try {
        const user = await prisma.user.findMany({
            where: {
                username: {
                    contains: searchQuery,
                    mode: 'insensitive',
                },
            },
            take: 10,
            select: { username: true },
        });
        console.log(user);
    } catch (error) {
        return error;
    }
};
