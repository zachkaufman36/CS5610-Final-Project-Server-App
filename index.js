import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import Hello from './Hello.js';
import AssignmentRoutes from './Kambaz/Assignments/routes.js';
import AttemptsRoutes from './Kambaz/Attempts/routes.js';
import CourseRoutes from './Kambaz/Courses/routes.js';
import EnrollmentRoutes from './Kambaz/Enrollments/routes.js';
import ModuleRoutes from './Kambaz/Modules/routes.js';
import QuestionRoutes from './Kambaz/Questions/routes.js';
import QuizRoutes from './Kambaz/Quizzes/routes.js';
import UserRoutes from './Kambaz/Users/routes.js';
import Lab5 from './Lab5/index.js';

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kambaz';
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
    cors({
        credentials: true,
        origin: process.env.NETLIFY_URL || 'http://localhost:5173',
    })
);

const sessionOptions = {
    secret: process.env.SESSION_SECRET || 'kambaz',
    resave: false,
    saveUninitialized: false,
};

if (process.env.NODE_ENV !== 'development') {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: 'none',
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    };
}

app.use(session(sessionOptions));
app.use(express.json());
Lab5(app);
Hello(app);
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);
QuizRoutes(app);
QuestionRoutes(app);
AttemptsRoutes(app);
app.listen(process.env.PORT || 4000);
