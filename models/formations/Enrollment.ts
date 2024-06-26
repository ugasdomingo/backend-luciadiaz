// Import tools
import { Schema, model } from 'mongoose';

//Create Enrollment Schema
const enrollmentSchema = new Schema(
    {
        fid: {
            type: Schema.Types.ObjectId,
            ref: 'Formationss',
            required: true,
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        paymentProof: {
            public_id: {
                type: String,
                required: true,
            },
            secure_url: {
                type: String,
                required: true,
            },
        },
        payed: {
            type: Boolean,
            default: false,
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

//Update payed status
enrollmentSchema.methods.updatePayed = async function (payed: boolean) {
    const enrollment = this;

    try {
        enrollment.payed = payed;
        await enrollment.save();
        return true;
    } catch (error) {
        console.log(error);
        throw new Error('Error updating payed status');
    }
};

export default model('Enrollments', enrollmentSchema);
