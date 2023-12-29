import http from 'http';
import app from './app';
import 'dotenv/config';

const server: http.Server = http.createServer(app);
const port: number = Number(process.env.PORT) || 3000;

const startServer = (): void => {
    server.listen(port, () => {
        if (process.env.ENV === 'development') {
            console.log(`Server running on port ${port}`);
        }
    });
};

startServer();
