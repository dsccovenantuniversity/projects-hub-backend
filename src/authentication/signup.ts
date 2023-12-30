import passport from 'passport';

export const googleSignup = async () => {
    passport.authenticate('google', { scope: ['email', 'profile'] });
};
export const googleSignupCallback = async () => {
    passport.authenticate('google', {
        successRedirect: '/',
    });
};
