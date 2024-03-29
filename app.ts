//Import Tools
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

//Import Routes
import testRouter from './routes/testRouter';
import authRouter from './routes/authRouter';
import blogRouter from './routes/blogRouter';
import booksRouter from './routes/books/booksRouter';
import bestDadRouter from './routes/books/bestDadFormRouter';
import formationsRouter from './routes/formations/formationsRouter';
import enrollmentRouter from './routes/formations/enrollmentRouter';
import testResultsRouter from './routes/test/testResultsRouter';

//Define app
const app = express();

const allowedOrigins = [
    process.env.ORIGIN1 as string,
    process.env.ORIGIN2 as string,
    process.env.ORIGIN3 as string,
];

//Middleware
app.use(
    cors({
        origin: function (origin: any, callback: any) {
            if (allowedOrigins.includes(origin)) {
                return callback(null, origin);
            }
            return callback(
                'Error CORS, origin: ' + origin + ', No autorizado'
            );
        },
        credentials: true,
    })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/', testRouter);
app.use('/api', authRouter);
app.use('/api/blog', blogRouter);
app.use('/api/books', booksRouter);
app.use('/api/books/best-dad', bestDadRouter);
app.use('/api/formations', formationsRouter);
app.use('/api/formations/enrollment', enrollmentRouter);
app.use('/api/test', testResultsRouter);

//Export app
export default app;
