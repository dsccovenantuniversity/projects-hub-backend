import { prisma } from '../config/prisma';

export const createUser = async (userData: any) => {
    //receives an object data
    try {
        const user = await prisma.user.create({
            data: userData,
        });
        return user;
    } catch (error) {
        return error;
    }
};

export const findUserbyMail = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return user;
    } catch (error) {
        return error;
    }
};

export const findUserbyId = async (id: number) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
        });
        return user;
    } catch (error) {
        return error;
    }
};

export const findUserbyGoogleId = async (id: number) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                google_provider_id: id,
            },
        });
        return user;
    } catch (error) {
        return error;
    }
};

export const getAllUsers = async () => {
    try {
        const user = await prisma.user.findMany({
            select: { username: true },
        });
        return user;
    } catch (error) {
        return error;
    }
};

export const updateUserDetails = async (id: number, data: any) => {
    try {
        const user = await prisma.user.update({
            where: {
                id: id,
            },
            data: data,
        });
        return user;
    } catch (error) {
        return error;
    }
};
export const deleteUser = async (id: number) => {
    try {
        const user = await prisma.user.delete({
            where: {
                id: id,
            },
        });
        return user;
    } catch (error) {
        return error;
    }
};