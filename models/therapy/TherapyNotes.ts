//Import tools
import { Schema, model } from 'mongoose';

//Create Therapy Schema
const therapyNotesSchema = new Schema(
    {
        uid: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        motivo: {
            type: String,
            required: true,
            trim: true,
        },
        observations: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export default model('TherapyNotes', therapyNotesSchema);
