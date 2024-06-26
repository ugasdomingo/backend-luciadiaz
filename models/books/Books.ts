// Import tools
import { Schema, model } from 'mongoose';

//Create Enrollment Schema
const booksSchema = new Schema(
    {
        booksName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        coverImage: {
            public_id: {
                type: String,
                required: true,
            },
            secure_url: {
                type: String,
                required: true,
            },
        },
        author: {
            type: String,
            default: 'Lucia Diaz',
        },
        extraInfo: {
            type: String,
        },
        paypalButton: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default model('Books', booksSchema);
