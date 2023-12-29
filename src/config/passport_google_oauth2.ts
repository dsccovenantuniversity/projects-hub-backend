import passport, { PassportStatic } from 'passport';
import {
    Strategy as GoogleStrategy,
    StrategyOptionsWithRequest,
} from 'passport-google-oauth2';
import { Request } from 'express';
import 'dotenv/config';

const options: StrategyOptionsWithRequest = {
    clientID: process.env.GOOGLE_CLIENT_ID ?? '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    callbackURL: `${process.env.DOMAIN}/auth/google/callback`,
    passReqToCallback: true,
};

export const googleStrategy = (passport: PassportStatic) => {
    passport.use(
        new GoogleStrategy(options, function (
            request: Request,
            accessToken: string,
            refreshToken: string,
            profile: any,
            done: any,
        ) {
            return done(null, profile);
        }),
    );
};

passport.serializeUser((user: any, done) => {
    done(null, user);
});

passport.deserializeUser((user: any, done) => {
    done(null, user);
});
