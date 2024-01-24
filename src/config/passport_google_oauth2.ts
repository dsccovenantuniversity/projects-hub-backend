import passport, { PassportStatic } from 'passport';
import {
    Strategy as GoogleStrategy,
    StrategyOptionsWithRequest,
} from 'passport-google-oauth2';
import { Request } from 'express';
import 'dotenv/config';
import {
    createUser,
    findUserbyGoogleId,
    findUserbyId,
} from '../repositories/user';

passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
    const user:any = await findUserbyId(id);
    done(null, user);
});

const options: StrategyOptionsWithRequest = {
    clientID: process.env.GOOGLE_CLIENT_ID ?? '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    callbackURL: '/auth/google/callback',
    passReqToCallback: true,
};

export default passport.use(
    new GoogleStrategy(options, async function (
        request: Request,
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: any,
    ) {
        let user = await findUserbyGoogleId(profile.id);
        if (!user) {
            const userData = {
                first_name: profile.given_name,
                last_name: profile.family_name,
                email: profile.email,
                username: profile.displayName,
                google_provider_id: profile.id,
                profile_image: profile.picture,
            };
            user = await createUser(userData);
        }
        return done(null, user);
    }),
);
