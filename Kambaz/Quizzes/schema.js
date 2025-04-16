import mongoose from 'mongoose';

const quizzesSchema = new mongoose.Schema(
    {
        _id: String,
        // _id: mongoose.Schema.Types.ObjectId,
        published: { type: Boolean, default: false },
        title: { type: String, required: true },
        course: { type: String, ref: 'CourseModel' },
        quizType: {
            type: String,
            enum: ['Graded Quiz', 'Practice Quiz', 'Graded Survey', 'Ungraded Survey'],
            default: 'Graded Quiz',
        },
        points: {
            type: Number,
            description: 'Sum of points from all questions in the quiz',
        },
        assignmentGroup: {
            type: String,
            enum: ['Quizzes', 'Exams', 'Assignments', 'Project'],
            default: 'Quizzes',
        },
        shuffleAnswers: {
            type: Boolean,
            default: true,
        },
        timeLimit: {
            type: Number,
            default: 20,
            description: 'Time limit in minutes',
        },
        allowMultipleAttempts: {
            type: Boolean,
            default: false,
        },
        attemptsAllowed: {
            type: Number,
            default: 1,
        },
        showCorrectAnswers: {
            type: Boolean,
            default: true,
        },
        accessCode: {
            type: String,
            default: '',
        },
        oneQuestionAtATime: {
            type: Boolean,
            default: true,
        },
        webcamRequired: {
            type: Boolean,
            default: false,
        },
        lockAfterAnswer: {
            type: Boolean,
            default: false,
        },
        due: Date,
        availableFrom: Date,
        availableUntil: Date,
    },
    { collection: 'quizzes' }
);
export default quizzesSchema;
