import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
    {
        _id: String,
        published: { type: Boolean, default: false },
        title: String,
        instructions: String,
        course: { type: String, ref: "courseModel" },
        quizType: { type: String, default: "Graded Quiz" },
        points: Number,
        assignmentGroup: { type: String, default: "Quizzes" },
        shuffleAnswers: { type: Boolean, default: true },
        timeLimitBool: { type: Boolean, default: true },
        timeLimit: { type: Number, default: 20 },
        allowMultipleAttempts: { type: Boolean, default: false },
        attemptsAllowed: { type: Number, default: 1 },
        showCorrectAnswers: { type: Boolean, default: true },
        accessCodeBool: { type: Boolean, default: false },
        accessCode: String,
        oneQuestionAtATime: { type: Boolean, default: true },
        webcamRequired: { type: Boolean, default: false },
        lockAfterAnswer: { type: Boolean, default: false }, 
        due: String, 
        availableFrom: String,
        availableUntil: String,
        questionCount: { type: Number, default: 0 }
    }, {collection: "quizzes"}
)

export default quizSchema