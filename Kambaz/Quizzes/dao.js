import model from './model.js';

export function findQuizzesForCourse(cid) {
    return model.find({ course: cid });
}

export function createQuiz(quiz) {
    return model.create(quiz);
}

export function deleteQuiz(quizId) {
    return model.deleteOne({ _id: quizId });
}

export function updateQuiz(quizId, quiz) {
    return model.updateOne({ _id: quizId }, { $set: quiz });
}

export function findOneQuiz(cid, qid) {
    return model.find({ course: cid, _id: qid });
}
