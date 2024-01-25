import { Request, Response } from 'express';
import {
    deleteUser,
    findUserbyId,
    findUserbyMail,
    getAllUsers,
    updateUserDetails,
} from '../repositories/user';
import { responseHandler } from '../utils/reponseHandler';

export const findUserbyMailController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const { email } = req.body;
    const user = await findUserbyMail(email);
    return res.status(200).json(responseHandler({ user }));
};

export const findUserbyIdController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const { userId } = req.body;
    const user = await findUserbyId(userId);
    return res.status(200).json(responseHandler({ user }));
};

export const getAllUsersController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const user = await getAllUsers();
    return res.status(200).json(responseHandler({ user }));
};

export const updateUserController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const { userId, data } = req.body;
    const user = await updateUserDetails(userId, data );
    return res.status(200).json(responseHandler({ user }));
};

export const deleteUserController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const { userId } = req.body;
    const user = await deleteUser(userId);
    return res.status(200).json(responseHandler({ user }));
};