import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { googleStrategy } from './src/config/passport_google_oauth2';
import logger from 'morgan';
import signupRouter from './src/routes/signup';

const app = express();

app.use(express.json());

app.set('trust proxy', 1);
app.use(
    session({
        secret: process.env.SESSION_SECRET ?? 'default_secret',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
        // store: process.env.SESSION_DB_URL ?? '',
    }),
);
googleStrategy(passport);
app.use(passport.initialize());
app.use(passport.session());
if (process.env.ENV === 'development') {
    app.use(logger('dev'));
}

app.use('/auth', signupRouter);

export default app;
