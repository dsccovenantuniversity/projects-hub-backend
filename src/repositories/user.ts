import { prisma } from "../config/prisma";

export const findUserbyMail = async (email: string) => {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return user;

};