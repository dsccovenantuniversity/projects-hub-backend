import { prisma } from '../config/prisma';

const createUser = async (userData: any) => {
    //receives an object data
    try {
        await prisma.user.create({
            data: userData,
        });
        return 'user registered successfully';
    } catch (error) {
        return error;
    }
};

const findUserbyMail = async (email: string) => {
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

const findUserbyId = async (id: number) => {
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

const getAllUsers = async () => {
    try {
        const user = await prisma.user.findMany({
            select: { username: true },
        });
        return user;
    } catch (error) {
        return error;
    }
};

const updateUserDetails = async (id: number, data: any) => {
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
const deleteUser = async (id: number) => {
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

module.exports = {
    createUser,
    findUserbyMail,
    findUserbyId,
    updateUserDetails,
    deleteUser,
};
