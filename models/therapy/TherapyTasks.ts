//Import tools
import { Schema, model } from 'mongoose';

//Create Therapy Schema
const therapyTaskSchema = new Schema(
    {
        uid: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        task: {
            type: String,
            required: true,
            trim: true,
        },
        observations: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            default: 'Pendiente',
        },
    },
    {
        timestamps: true,
    }
);

//Update task status
therapyTaskSchema.methods.updateStatus = async function (status: string) {
    const therapyTask = this;

    try {
        therapyTask.status = status;
        await therapyTask.save();
        return true;
    } catch (error) {
        console.log(error);
        throw new Error('Error updating task status');
    }
};

export default model('TherapyTask', therapyTaskSchema);
