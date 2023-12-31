import { prisma } from '../config/prisma';
import { createUserDto, updateUserDetailsDto } from './dtos/user.dto';

export const createUser = async (data: createUserDto) => {
    //receives an object data
    try {
        const user = await prisma.user.create({
            data: data,
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

export const findUserbyGoogleId = async (id: string) => {
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

export const updateUserDetails = async (
    id: number,
    data: updateUserDetailsDto,
) => {
    try {
        const currentDate = new Date();

        const user = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                ...data,
                updated_at: new Date(currentDate.getTime() + 60 * 60 * 1000),
            },
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
