// Import tools
import { Schema, model } from 'mongoose';

//Create Sells Schema
const sellsSchema = new Schema(
    {
        bid: {
            type: Schema.Types.ObjectId,
            ref: 'Books',
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
        paymentMethod: {
            type: String,
            required: true,
        },
        uid: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        notes: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

// Change payed
sellsSchema.methods.updatePayed = async function (payed: boolean) {
    const sell = this;

    try {
        sell.payed = payed;
        await sell.save();
        return true;
    } catch (error) {
        console.log(error);
        throw new Error('Error updating payed status');
    }
};

export default model('Sells', sellsSchema);
