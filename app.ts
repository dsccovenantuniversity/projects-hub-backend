import express from 'express';
import session from 'express-session';
import passport from 'passport';
import './src/config/passport_google_oauth2';
import logger from 'morgan';
import signupRouter from './src/routes/signup';
import projectRouter from './src/routes/project';
import commentRouter from './src/routes/comment';
import { sessionStore } from './src/config/session-store';
import errorHandler from './src/middlewares/errorHandler';
const app = express();

app.use(express.json());

app.set('trust proxy', 1);

app.use(
    session({
        secret: process.env.SESSION_SECRET ?? 'default_secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000,
            secure: process.env.ENV === 'production',
            sameSite: process.env.ENV === 'production' ? 'none' : false,
        },
        store: sessionStore,
    }),
);

app.use(passport.initialize());
app.use(passport.session());
if (process.env.ENV === 'development') {
    app.use(logger('dev'));
}

app.use('/auth', signupRouter);
app.use('/projects', projectRouter);
app.use('/projects/:id/comments', commentRouter);
app.use(errorHandler)

export default app;
