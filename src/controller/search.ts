import { searchAllUsers } from '../repositories/search';
import { responseHandler } from '../utils/reponseHandler';

export const searcUsersController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const { searchQuery } = req.body;

    const result = await searchAllUsers(searchQuery);
    return res.status(200).json(responseHandler({ result }));
};
