// Import tools
import { Schema, model } from 'mongoose';

//Create Regiter Schema
const testResultsSchema = new Schema(
    {
        date: {
            type: Date,
            default: Date.now(),
        },
        testTitle: {
            type: String,
            required: true,
        },
        answers: {
            type: Object,
            required: true,
        },
        uid: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default model('TestResults', testResultsSchema);
