import mongoose from 'mongoose';
import schema from './schema.js';
const model = mongoose.model('QuestionsModel', schema);
export default model;
