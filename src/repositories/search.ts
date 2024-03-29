import { prisma } from "../config/prisma";

export const searchUsers = async (searchQuery: string) => {
    //gets all users' and sends only the username
  
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
        return user ;

};