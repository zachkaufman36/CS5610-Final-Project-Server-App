import model from './model.js';

export function findAttempts(quizId, userId) {
    return model.find({ quizId: quizId, userId: userId });
}

export function createAttempt(attempt) {
    return model.create(attempt);
}

// export function deleteAttempt(attemptId) {
//     return model.deleteOne({ _id: attemptId });
// }

// export function updateQuiz(quizId, quiz) {
//     return model.updateOne({ _id: quizId }, { $set: quiz });
// }

export function findMaxAttempt(quizId, userId) {
    return model.findOne({ quizId: quizId, userId: userId }, {}, { sort: { attemptNumber: -1 } });
}
