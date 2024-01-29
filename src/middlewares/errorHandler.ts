import { Request, Response, NextFunction } from 'express';

export default function errorHandler(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    if (error) {
        if (error.name === 'PrismaClientValidationError') {
            return res.status(400).json({
                status: false,
                message: error.message.split('\n').splice(-1),
                data: null,
                error: {
                    name: error.name,
                    info: '',
                },
            });
        } else {
            console.error(error);
            return res.status(500).json({
                status: false,
                message:
                    "Something went wrong from our end. Hold on, we're trying to fix it",
                data: null,
                error: {
                    name: process.env.ENV !== 'production' ? error.name : 'Server Error',
                    info: process.env.ENV !== 'production' ? error.message : '',
                },
            });
        }
    }
}
