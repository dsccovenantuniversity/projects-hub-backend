import { Pool } from 'pg';
import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';

const pgSession = connectPgSimple(session);

const pool = (() => {
    if (process.env.NODE_ENV !== 'production') {
        return new Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: false,
        });
    } else {
        return new Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: process.env.DATABASE_URL ? true : false,
        });
    }
})();

const sessionStore = new pgSession({ createTableIfMissing: true, pool });

export { sessionStore };
