import mongoose from 'mongoose';
const questionsSchema = new mongoose.Schema(
    {
        _id: String,
        title: String,
        type: String,
        description: String,
        answer: String,
        options: [String],
        quizId: String,
        points: Number,
        editing: { type: String, default: 'false' },
    },
    { collection: 'questions' }
);
export default questionsSchema;
