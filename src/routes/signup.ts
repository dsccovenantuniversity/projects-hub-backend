import passport from 'passport';
import { Router } from 'express';

const router = Router();

router.get(
    '/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }),
);

router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: '/',
    }),
);

export default router;
