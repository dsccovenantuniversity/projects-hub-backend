import { prisma } from '../config/prisma';
import { createUserDto, updateUserDetailsDto } from '../interfaces/user.dto';
import { validateUpdatedUser } from '../validators/user';

export const createUser = async (data: createUserDto) => {
    const user = await prisma.user.create({
        data: data,
    });
    return user;
};
export const findUserbyMail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    return user;
};
export const findUserbyId = async (userId: number) => {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
    return user;
};
export const findUserbyGoogleId = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: {
            google_provider_id: id,
        },
    });
    return user;
};

export const getAllUsers = async () => {
    const user = await prisma.user.findMany({
        select: { username: true },
    });
    return user;
};

export const updateUserDetails = async (
    id: number,
    data: updateUserDetailsDto,
) => {
    validateUpdatedUser(data);
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
};
