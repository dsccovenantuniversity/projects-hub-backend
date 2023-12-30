import { Request, Response, NextFunction } from 'express';

const auth = (req: Request, res: Response, next: NextFunction): void => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status(401).json({
            data: null,
            error: 'You are not authenticated',
            status: 'failure',
        });
    }
};

export default auth;
