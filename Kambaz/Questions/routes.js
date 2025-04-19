import * as dao from './dao.js';
function QuestionRoutes(app) {
    // create Question
    app.post('/api/questions/', async (req, res) => {
        const newQuestion = await dao.createQuestion(req.params.qid, req.body);
        res.json(newQuestion);
    });

    // delete Question
    app.delete('/api/questions/:qid', async (req, res) => {
        const status = await dao.deleteQuestion(req.params.qid);
        res.json(status);
    });

    // update Question
    app.put('/api/questions/:qid', async (req, res) => {
        const { qid } = req.params;
        const status = await dao.updateQuestion(qid, req.body);
        res.json(status);
    });

    // get Question by Id
    app.get('/api/questions/:qid', async (req, res) => {
        const question = await dao.findQuestion(req.params.qid);
        res.send(question);
    });

    // Quiz
    // get All Questions For A Quiz
    app.get('/api/Quizzes/:quizId/questions', async (req, res) => {
        const { quizId } = req.params;
        const questions = await dao.findQuestionByQuiz(quizId);
        res.send(questions);
    });
}
export default QuestionRoutes;
