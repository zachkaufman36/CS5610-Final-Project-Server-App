import * as assignmentsDao from '../Assignments/dao.js';
import * as modulesDao from '../Modules/dao.js';
import * as quizzesDao from '../Quizzes/dao.js';
import * as dao from './dao.js';

export default function CourseRoutes(app) {
    app.get('/api/courses', (req, res) => {
        const courses = dao.findAllCourses();
        res.json(courses);
    });

    app.delete('/api/courses/:courseId', (req, res) => {
        const { courseId } = req.params;
        const status = dao.deleteCourse(courseId);
        res.send(status);
    });

    app.put('/api/courses/:courseId', (req, res) => {
        const { courseId } = req.params;
        const courseUpdates = req.body;
        const status = dao.updateCourse(courseId, courseUpdates);
        res.send(status);
    });

    app.get('/api/courses/:courseId/modules', (req, res) => {
        const { courseId } = req.params;
        const modules = modulesDao.findModulesForCourse(courseId);
        res.json(modules);
    });

    app.post('/api/courses/:courseId/modules', (req, res) => {
        const { courseId } = req.params;
        const module = {
            ...req.body,
            course: courseId,
        };
        const newModule = modulesDao.createModule(module);
        res.send(newModule);
    });

    app.get('/api/courses/:courseId/Assignments', (req, res) => {
        const { courseId } = req.params;
        const assignments = assignmentsDao.findAssignmentsForCourse(courseId);
        res.json(assignments);
    });

    app.post('/api/courses/:courseId/Assignments', (req, res) => {
        const { courseId } = req.params;
        const assignment = {
            ...req.body,
            course: courseId,
        };
        const newAssignment = assignmentsDao.createAssignment(assignment);
        res.send(newAssignment);
    });

    app.get('/api/courses/:courseId/Quizzes', async (req, res) => {
        const { courseId } = req.params;
        const quizzes = await quizzesDao.findQuizzesForCourse(courseId);
        res.json(quizzes);
    });

    app.post('/api/courses/:courseId/Quizzes', (req, res) => {
        const { courseId } = req.params;
        const quiz = {
            ...req.body,
            course: courseId,
        };
        const newQuiz = quizzesDao.createQuiz(quiz);
        res.send(newQuiz);
    });
}
