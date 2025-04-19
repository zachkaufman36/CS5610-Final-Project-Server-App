import mongoose from 'mongoose';
const attemptsSchema = new mongoose.Schema(
    {
        _id: String,
        attemptNumber: String,
        answers: { type: [String], default: [] },
        quizId: String,
        userId: String,
        score: Number,
        totalPoints: Number,
        date: Date,
    },
    { collection: 'attempts' }
);
export default attemptsSchema;
