import { Router } from 'express';
import { googleSignup, googleSignupCallback } from '../authentication/signup';

const router = Router();

router.get('/google', googleSignup);

router.get('/google/callback', googleSignupCallback);

export default router;
