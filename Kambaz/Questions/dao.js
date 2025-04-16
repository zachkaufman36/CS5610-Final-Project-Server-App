import model from './model.js';

export function createQuestion(quiz, question) {
    return model.create(question);
}

export function findAllQuestions() {
    return model.find();
}

export function findQuestionByQuiz(quiz) {
    return model.find({ quizId: quiz });
}

export function updateQuestion(questionId, question) {
    try {
        return model.updateOne({ id: questionId }, { $set: question });
    } catch (error) {
        console.error('Error updating question:', error);
    }
}

export function deleteQuestion(questionId) {
    return model.findOneAndDelete({ id: questionId });
}

export function findQuestion(questionId) {
    return model.findOne({ id: questionId });
}
