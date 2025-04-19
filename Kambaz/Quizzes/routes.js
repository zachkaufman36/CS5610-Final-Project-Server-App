import * as dao from './dao.js';

export default function QuizRoutes(app) {
    // get All Quiz For A Course
    app.get('/api/courses/:cid/quizzes', async (req, res) => {
        const quizzes = await dao.findAllCourseQuizzes(req.params.cid);
        res.json(quizzes);
    });

    // create Quiz
    app.post('/api/courses/:cid/quizzes', async (req, res) => {
        const newQuiz = {
            ...req.body,
            course: req.params.cid,
            _id: new Date().getTime().toString(),
        };
        const quiz = await dao.createQuiz(newQuiz);
        res.json(quiz);
    });

    // delete Quiz
    app.delete('/api/quizzes/:qid', async (req, res) => {
        const status = await dao.deleteQuiz(req.params.qid);
        res.json(status);
    });

    // update Quiz
    app.put('/api/quizzes/:qid', async (req, res) => {
        const status = await dao.updateQuiz(req.params.qid, req.body);
        res.json(status);
    });

    // get Quiz by Id
    app.get('/api/courses/:cid/quizzes/:qid', async (req, res) => {
        const quiz = await dao.findOneQuiz(req.params.cid, req.params.qid);
        res.json(quiz);
    });
}
