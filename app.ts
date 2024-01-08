import express from 'express';
import session from 'express-session';
import passport from 'passport';
import './src/config/passport_google_oauth2';
import logger from 'morgan';
import signupRouter from './src/routes/signup';
import projectRouter from './src/routes/project';
import connectPgSimple from 'connect-pg-simple';

const app = express();
const pgSession = connectPgSimple(session);

app.use(express.json());

app.set('trust proxy', 1);
app.use(
    session({
        secret: process.env.SESSION_SECRET ?? 'default_secret',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 },
        store: new pgSession({ createTableIfMissing: true }),
    }),
);

app.use(passport.initialize());
app.use(passport.session());
if (process.env.ENV === 'development') {
    app.use(logger('dev'));
}

app.use('/auth', signupRouter);
app.use('/projects', projectRouter);

export default app;
