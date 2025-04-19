import * as dao from './dao.js';

export default function AttemptsRoutes(app) {
    // get All Quiz For A Course
    app.get('/api/attempts/:qid/:uid', async (req, res) => {
        const attempts = await dao.findAttempts(req.params.qid, req.params.uid);
        res.json(attempts);
    });

    // create Quiz
    app.post('/api/attempts/:qid/:uid', async (req, res) => {
        const newAttempt = {
            ...req.body,
            quizId: req.params.qid,
            userId: req.params.uid,
            _id: new Date().getTime().toString(),
        };
        const attempt = await dao.createAttempt(newAttempt);
        res.json(attempt);
    });

    // get Quiz by Id
    app.get('/api/attempts/max/:qid/:uid', async (req, res) => {
        const attempt = await dao.findMaxAttempt(req.params.qid, req.params.uid);
        res.json(attempt);
    });
}
