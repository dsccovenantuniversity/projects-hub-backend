import express, { Request, Response } from 'express';
import auth from '../middlewares/auth';
import passport from 'passport';

const router = express.Router();

router.get(
    '/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }),
);

router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: '/auth/protected',
        failureRedirect: '/auth/failure',
    }),
);

router.get('/protected', auth, (req: Request, res: Response) => {
    const name = (req.user as any)?.displayName;
    res.json({ data: { body: `welcome ${name}` }, status: 'success' });
});

router.get('/failure', (req: Request, res: Response) => {
    return res.status(401).json({
        data: null,
        error: 'You are not authenticated',
        status: 'failure',
    });
});

export default router;
