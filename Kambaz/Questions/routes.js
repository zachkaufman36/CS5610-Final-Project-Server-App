import * as dao from './dao.js';
function QuestionRoutes(app) {
    // create Question
    app.post('/api/quizzes/:qid/question', async (req, res) => {
        const newQuestion = await dao.createQuestion(req.params.qid, req.body);
        res.json(newQuestion);
    });

    // delete Question
    app.delete('/api/questions/:quid', async (req, res) => {
        const status = await dao.deleteQuestion(req.params.quid);
        res.json(status);
    });

    // get All Questions For A Quiz
    app.get('/api/quizzes/:qid/questions', async (req, res) => {
        const { qid } = req.params;
        const questions = await dao.findQuestionByQuiz(qid);
        res.send(questions);
    });

    // update Question
    app.put('/api/questions/:quid', async (req, res) => {
        const { quid } = req.params;
        const status = await dao.updateQuestion(quid, req.body);
        res.json(status);
    });

    // get Question by Id
    app.get('/api/questions/:quid', async (req, res) => {
        const question = await dao.findQuestion(req.params.quid);
        res.send(question);
    });
}
export default QuestionRoutes;
